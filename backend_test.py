import requests
import sys
import json
from datetime import datetime

class CubicLogisticsAPITester:
    def __init__(self, base_url="https://cubic-shipping.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        
    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)
                
            print(f"   Response Status: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - Status: {response.status_code}")
                if response.content:
                    try:
                        response_data = response.json()
                        print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                    except:
                        print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ FAILED - Expected {expected_status}, got {response.status_code}")
                print(f"   Error Response: {response.text[:200]}...")
                
            return success, response.json() if success and response.content else {}
            
        except requests.exceptions.ConnectionError:
            print(f"❌ FAILED - Connection Error: Cannot connect to {url}")
            return False, {}
        except Exception as e:
            print(f"❌ FAILED - Error: {str(e)}")
            return False, {}
    
    def test_root_endpoint(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET", 
            "api/",
            200
        )
    
    def test_quote_submission(self):
        """Test quote form submission"""
        quote_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+91 9876543210",
            "company": "Test Company",
            "service_type": "Transportation",
            "origin": "Chennai",
            "destination": "Mumbai", 
            "cargo_type": "Electronics",
            "weight": "500 kg",
            "additional_info": "Urgent delivery required"
        }
        
        success, response = self.run_test(
            "Quote Submission",
            "POST",
            "api/quote",
            200,
            data=quote_data
        )
        
        if success and 'id' in response:
            return response.get('id')
        return None
    
    def test_contact_submission(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test Contact",
            "email": "contact@example.com", 
            "phone": "+91 8765432109",
            "subject": "General Inquiry",
            "message": "This is a test contact message."
        }
        
        success, response = self.run_test(
            "Contact Submission",
            "POST",
            "api/contact", 
            200,
            data=contact_data
        )
        
        if success and 'id' in response:
            return response.get('id')
        return None
        
    def test_career_application(self):
        """Test career application submission"""
        career_data = {
            "name": "Test Applicant",
            "email": "career@example.com",
            "phone": "+91 7654321098", 
            "position": "Logistics Coordinator",
            "experience": "3 years",
            "cover_letter": "I am interested in joining Cubic Logistics as a Logistics Coordinator. I have 3 years of experience in the logistics industry."
        }
        
        success, response = self.run_test(
            "Career Application",
            "POST",
            "api/careers",
            200, 
            data=career_data
        )
        
        if success and 'id' in response:
            return response.get('id')
        return None
    
    def test_get_quotes(self):
        """Test getting all quotes"""
        return self.run_test(
            "Get All Quotes",
            "GET",
            "api/quotes",
            200
        )
    
    def test_invalid_data_handling(self):
        """Test invalid data handling"""
        print("\n🔍 Testing Invalid Data Handling...")
        
        # Test missing required fields
        invalid_quote = {
            "name": "Test",
            # Missing email, phone, etc.
        }
        
        success, _ = self.run_test(
            "Invalid Quote Data", 
            "POST",
            "api/quote",
            422,  # Expect validation error
            data=invalid_quote
        )
        
        # Test invalid email format
        invalid_email_data = {
            "name": "Test User",
            "email": "invalid-email",
            "phone": "+91 9876543210",
            "service_type": "Transportation",
            "origin": "Chennai",
            "destination": "Mumbai",
            "cargo_type": "Electronics", 
            "weight": "500 kg"
        }
        
        success2, _ = self.run_test(
            "Invalid Email Format",
            "POST", 
            "api/quote",
            422,  # Expect validation error
            data=invalid_email_data
        )
        
        return success and success2

def main():
    print("🚚 Cubic Logistics API Testing Suite")
    print("=" * 50)
    
    # Setup
    tester = CubicLogisticsAPITester()
    
    # Run all tests
    test_results = []
    
    # Basic API tests
    success, _ = tester.test_root_endpoint()
    test_results.append(("API Root", success))
    
    # Form submission tests
    quote_id = tester.test_quote_submission()
    test_results.append(("Quote Submission", quote_id is not None))
    
    contact_id = tester.test_contact_submission()
    test_results.append(("Contact Submission", contact_id is not None))
    
    career_id = tester.test_career_application()
    test_results.append(("Career Application", career_id is not None))
    
    # Data retrieval tests
    success, _ = tester.test_get_quotes()
    test_results.append(("Get Quotes", success))
    
    # Error handling tests
    success = tester.test_invalid_data_handling()
    test_results.append(("Invalid Data Handling", success))
    
    # Print final results
    print("\n" + "=" * 50)
    print("📊 FINAL TEST RESULTS")
    print("=" * 50)
    
    for test_name, passed in test_results:
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"{status} - {test_name}")
    
    print(f"\n📈 Overall Score: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed! Backend API is working correctly.")
        return 0
    else:
        print("⚠️  Some tests failed. Please check the backend implementation.")
        return 1

if __name__ == "__main__":
    sys.exit(main())