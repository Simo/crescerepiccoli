require 'test_helper'

class BreadcrumbsControllerTest < ActionController::TestCase
  setup do
    @breadcrumb = breadcrumbs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:breadcrumbs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create breadcrumb" do
    assert_difference('Breadcrumb.count') do
      post :create, breadcrumb: { menu_item_id: @breadcrumb.menu_item_id, title: @breadcrumb.title, visible: @breadcrumb.visible }
    end

    assert_redirected_to breadcrumb_path(assigns(:breadcrumb))
  end

  test "should show breadcrumb" do
    get :show, id: @breadcrumb
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @breadcrumb
    assert_response :success
  end

  test "should update breadcrumb" do
    patch :update, id: @breadcrumb, breadcrumb: { menu_item_id: @breadcrumb.menu_item_id, title: @breadcrumb.title, visible: @breadcrumb.visible }
    assert_redirected_to breadcrumb_path(assigns(:breadcrumb))
  end

  test "should destroy breadcrumb" do
    assert_difference('Breadcrumb.count', -1) do
      delete :destroy, id: @breadcrumb
    end

    assert_redirected_to breadcrumbs_path
  end
end
