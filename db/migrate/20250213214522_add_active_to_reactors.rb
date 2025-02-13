class AddActiveToReactors < ActiveRecord::Migration[7.2]
  def change
    add_column :reactors, :active, :boolean, default: true
  end
end
