class AddCultureIdToCultureLogs < ActiveRecord::Migration[7.2]
  def change
    add_reference :culture_logs, :culture, null: false, foreign_key: true
  end
end
