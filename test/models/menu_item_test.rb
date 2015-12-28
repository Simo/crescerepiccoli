require 'test_helper'

class MenuItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @item = MenuItem.new(label: 'home', reference: 'home', color: 'red', href: 'home_path')
  end

  test "should active set to 31/12/9999" do
    assert @item.active
  end

  test "should active return his value" do
    @item.active = Date.new(2015,12,9)
    assert "2015-12-09", @item.active
  end

  test "controls menuItem activeness" do
    assert @item.is_active?
  end
end
