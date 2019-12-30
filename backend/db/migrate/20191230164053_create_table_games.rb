class CreateTableGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :score
      t.integer :time
      t.string :created_on
    end
  end
end
