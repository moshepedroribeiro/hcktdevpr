class Culture < ApplicationRecord
  has_many :reactors
  has_many :microorganisms
end
