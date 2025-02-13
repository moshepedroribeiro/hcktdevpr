class RemoveReactorIdFromMicroorganisms < ActiveRecord::Migration[7.2]
  def change
    remove_reference :microorganisms, :reactor, null: false, foreign_key: true
  end
end
