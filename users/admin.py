from django.contrib import admin
from users.api.fishing.models import Profile, Fish, Loot, Weapon
from users.api.characters.models import Character, Character_Weapon

admin.site.register(Profile)
admin.site.register(Fish)
admin.site.register(Loot)
admin.site.register(Weapon)
admin.site.register(Character)
admin.site.register(Character_Weapon)
