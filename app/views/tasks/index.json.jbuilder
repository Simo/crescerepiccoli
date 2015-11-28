json.array!(@tasks) do |task|
  json.extract! task, :id, :project_id, :title, :description, :started_at, :finished_at, :notes
  json.url task_url(task, format: :json)
end
