json.array!(@menu_items) do |menu_item|
  json.extract! menu_item, :id, :label, :reference, :color, :href, :active, :priority
  json.url menu_item_url(menu_item, format: :json)
end
