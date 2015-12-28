class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :menu_items, :events

  def menu_items
    @menu_items = MenuItem.all
  end

  def events
    @events = Event.next_events.limit(2)
  end
end