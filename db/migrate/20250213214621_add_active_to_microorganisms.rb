class AddActiveToMicroorganisms < ActiveRecord::Migration[7.2]
  def change
    add_column :microorganisms, :active, :boolean, default: true
  end
end
