json.array!(@posts) do |post|
  json.extract! post, :id, :autore, :titolo, :estratto, :corpo, :esteso, :bozza, :pubblicato, :cancellato, :categoria, :tipo
  json.url post_url(post, format: :json)
end
