class RemoveReactorIdFromCultureLogs < ActiveRecord::Migration[7.2]
  def change
    remove_reference :culture_logs, :reactor, null: false, foreign_key: true
  end
end
