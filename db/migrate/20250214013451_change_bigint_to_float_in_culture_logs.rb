class ChangeBigintToFloatInCultureLogs < ActiveRecord::Migration[7.2]
  def change
    change_column :culture_logs, :pressure, :float
    change_column :culture_logs, :oxygen, :float
    change_column :culture_logs, :temperature, :float
    change_column :culture_logs, :ph, :float
    change_column :culture_logs, :concentration, :float
  end
end
