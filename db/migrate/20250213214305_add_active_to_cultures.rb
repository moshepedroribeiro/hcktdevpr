class AddActiveToCultures < ActiveRecord::Migration[7.2]
  def change
    add_column :cultures, :active, :boolean, default: true
  end
end
