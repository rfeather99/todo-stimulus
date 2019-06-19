class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.references :user, null: true
      t.integer :status, null:false, default: 0
      t.datetime :scheduled_start_at, null: true
      t.datetime :scheduled_end_at, null: true
      t.datetime :start_at, null: true
      t.datetime :end_at, null: true
      t.references :created_by, null: false
      t.references :modified_by, null: false
      t.timestamps
    end
  end
end
