require 'test_helper'

class MontessoriControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
