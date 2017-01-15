class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :menu_items, :events, :latest_posts, :breadcrumbs

  # before_action :set_locale
  # def set_locale
  #   I18n.locale = params[:locale] || I18n.default_locale
  # end

  def menu_items
    @menu_items = MenuItem.by_priority
  end

  def events
    @selected_events = Event.next_events.limit(2)
  end

  def latest_posts
    @latestposts = Post.most_recent 3
    @blogposts = Post.most_recent 2
  end

  def breadcrumbs
    @breadcrumbs = Breadcrumb.all
  end
end