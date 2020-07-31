class AddBoardRefToTodos < ActiveRecord::Migration[5.2]
  def change
    add_reference :todos, :board, foreign_key: true
  end
end
