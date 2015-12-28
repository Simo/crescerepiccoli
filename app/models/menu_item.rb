class MenuItem < ActiveRecord::Base

  attr_accessor :active

  has_one :breadcrumb


  def initialize *args,&block
    super *args,&block
    @active = Date.new(9999,12,31) unless @active
  end

  def to_partial_path
    'application/menu_item'
  end

  def is_active?
    result = false
    if active == Date.new(9999,12,31)
      result = true
    end
    result
  end

end
