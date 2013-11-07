class CreateDishes < ActiveRecord::Migration
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :summary
      t.text :content
      t.string :tags, array: true
      t.string :image_paths, array: true
      t.string :thumbnail_path

      t.timestamps
    end
  end
end
