from django import template


register = template.Library()


def number_to_string(value):
    if value == 1:
        return 'Първо'
    if value == 2:
        return 'Второ'
    if value == 3:
        return 'Трето'
    if value == 4:
        return 'Четвърто'
    if value == 5:
        return 'Пето'
    if value == 6:
        return 'Шесто'


def measurement_to_string(value):
    if value == 'grams':
        return 'грама'
    if value == 'servings':
        return 'броя'
    if value == 'liters':
        return 'литра'


register.filter('number_to_string', number_to_string)
register.filter('measurement_to_string', measurement_to_string)
