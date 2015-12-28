json.array!(@events) do |event|
  json.extract! event, :id, :titolo, :descrizione, :quando, :ora, :address, :latitude, :longitude
  json.url event_url(event, format: :json)
end
