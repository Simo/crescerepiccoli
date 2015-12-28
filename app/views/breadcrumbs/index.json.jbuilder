json.array!(@breadcrumbs) do |breadcrumb|
  json.extract! breadcrumb, :id, :title, :menu_item_id, :visible
  json.url breadcrumb_url(breadcrumb, format: :json)
end
