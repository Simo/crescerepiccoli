# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

MenuItem.create!(label: 'Home', reference: 'home', color: 'red', href: 'root_path', priority: 1)
MenuItem.create!(label: 'Storia', reference: 'storia', color: 'mustard', href: 'storia_path', priority: 2)
MenuItem.create!(label: 'Scuola', reference: 'scuola', color: 'green', href: 'scuola_path', priority: 3)
MenuItem.create!(label: 'Orari', reference: 'orari', color: 'yellow', href: 'orari_path', priority: 4)
MenuItem.create!(label: 'Servizi', reference: 'servizi', color: 'blue', href: 'servizi_path', priority: 5)
MenuItem.create!(label: 'Progetti', reference: 'projects', color: 'steelblue', href: 'projects_path', priority: 6)
MenuItem.create!(label: 'Documenti', reference: 'documenti', color: 'lavender', href: 'documenti_path', priority: 7)
MenuItem.create!(label: 'Comunicazioni', reference: 'comunicazioni', color: 'purple', href: 'comunicazioni_path', priority: 8)
MenuItem.create!(label: 'Comitato Mamme', reference: 'comitatomamme', color: 'pink', href: 'comitatomamme_path', priority: 9)

Breadcrumb.create!(title: 'Una "lunga" storia. La Nostra.', menu_item_id: 2, visible: 1)
Breadcrumb.create!(title: 'Home', menu_item_id: 1, visible: 0)
Breadcrumb.create!(title: 'Gli spazi della scuola', menu_item_id: 3, visible: 1)
Breadcrumb.create!(title: 'La nostra "giornata tipo"', menu_item_id: 4, visible: 1)
Breadcrumb.create!(title: 'I servizi offerti', menu_item_id: 5, visible: 1)
Breadcrumb.create!(title: 'I nostri progetti didattici', menu_item_id: 6, visible: 0)
Breadcrumb.create!(title: 'I documenti indispensabili', menu_item_id: 7, visible: 1)
Breadcrumb.create!(title: 'Comunicazioni dalla scuola', menu_item_id: 8, visible: 1)
Breadcrumb.create!(title: 'Il comitato più forte che c\'è', menu_item_id: 9, visible: 1)
