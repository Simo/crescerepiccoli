module ApplicationHelper

  def title page_title
    content_for(:title) { page_title }
  end

  def current_page name
    'current_page_item' if controller.controller_name == name
  end

end
