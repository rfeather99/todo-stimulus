class CreateStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :statuses do |t|
      t.string :name, null: false
      t.integer :order, null:false
      t.references :board, null: false
      t.timestamps
    end
  end
end

