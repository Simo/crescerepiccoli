json.array!(@projects) do |project|
  json.extract! project, :id, :title, :description, :started_at, :finished_at, :author, :notes
  json.url project_url(project, format: :json)
end
