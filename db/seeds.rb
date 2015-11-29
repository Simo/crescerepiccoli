# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
MenuItem.create!(label: 'Home', reference: 'home', color: 'red', href: 'home_path')
MenuItem.create!(label: 'Storia', reference: 'storia', color: 'mustard', href: 'storia_path')
MenuItem.create!(label: 'Scuola', reference: 'scuola', color: 'green', href: 'scuola_path')
MenuItem.create!(label: 'Orari', reference: 'orari', color: 'yellow', href: 'orari_path')
MenuItem.create!(label: 'Servizi', reference: 'servizi', color: 'blue', href: 'home_path')
MenuItem.create!(label: 'POF', reference: 'pof', color: 'steelblue', href: 'home_path')
MenuItem.create!(label: 'Progetti', reference: 'projects', color: 'lavender', href: 'projects_path')
MenuItem.create!(label: 'Documenti', reference: 'documenti', color: 'purple', href: 'home_path')
MenuItem.create!(label: 'Comunicazioni', reference: 'comunicazioni', color: 'pink', href: 'home_path')
