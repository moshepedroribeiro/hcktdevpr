class CreateCultureLogs < ActiveRecord::Migration[7.2]
  def change
    create_table :culture_logs do |t|
      t.references :reactor, null: false, foreign_key: true
      t.references :microorganism, null: false, foreign_key: true
      t.bigint :pressure, null: false
      t.bigint :oxygen, null: false
      t.bigint :temperature, null: false
      t.bigint :ph, null: false
      t.bigint :concentration, null: false
      t.boolean :contaminants, null: false, default: false

      t.timestamps
    end

    add_index :culture_logs, [:reactor_id, :created_at]
    add_index :culture_logs, [:microorganism_id, :created_at]
  end
end
