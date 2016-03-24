require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "recupera pubblicati" do
    assert Post.by_type('comitatomamme').size == 3
  end
end
