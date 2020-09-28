from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Character, Character_Weapon

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class Character_WeaponSerializer(serializers.ModelSerializer):

        class Meta:
            model = Character_Weapon
            fields = '__all__'

class CharacterSerializer(serializers.ModelSerializer):
    weapon_info = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Character
        fields = '__all__'

    def get_weapon_info(self, obj):
        weapon = obj.weapon
        serializer = Character_WeaponSerializer(weapon)
        return serializer.data
