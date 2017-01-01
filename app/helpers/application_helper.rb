module ApplicationHelper

  def title page_title
    content_for(:title) { page_title }
  end

  def current_page name
    'current_page_item' if controller.controller_name == name
  end

  def current_breadcrumb name
    true if controller.controller_name == name
  end

  def millisec_to_formated_date millisec
    Date.strptime((millisec.to_f / 1000).to_s, '%s').strftime("%d/%m/%Y")
  end

  def event_date event
    millisec_to_formated_date event.quando
  end

  def event_time event
    "#{event.ora.hour}:#{event.ora.min}"
  end

end
