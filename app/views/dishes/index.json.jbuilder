json.array!(@dishes) do |dish|
  json.extract! dish, :name, :summary, :content, :tags, :image_paths, :thumbnail_path
  json.url dish_url(dish, format: :json)
end
