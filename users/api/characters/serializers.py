from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Character, Character_Weapon, Character_Grasta, Character_Skill

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class Character_WeaponSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character_Weapon
        fields = '__all__'

class Character_GrastaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character_Grasta
        fields = '__all__'

class Character_SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Character_Skill
        fields = '__all__'

class CharacterSerializer(serializers.ModelSerializer):
    wpn = serializers.SerializerMethodField(read_only=True)
    g1 = serializers.SerializerMethodField(read_only=True)
    g2 = serializers.SerializerMethodField(read_only=True)
    g3 = serializers.SerializerMethodField(read_only=True)
    g4 = serializers.SerializerMethodField(read_only=True)
    sk1 = serializers.SerializerMethodField(read_only=True)
    sk2 = serializers.SerializerMethodField(read_only=True)
    sk3 = serializers.SerializerMethodField(read_only=True)


    class Meta:
        model = Character
        fields = '__all__'

    def get_wpn(self, obj):
        weapon = obj.weapon
        serializer = Character_WeaponSerializer(weapon)
        return serializer.data

    def get_g1(self, obj):
        grasta_1 = obj.grasta_1
        serializer = Character_GrastaSerializer(grasta_1)
        return serializer.data

    def get_g2(self, obj):
        grasta_2 = obj.grasta_2
        serializer = Character_GrastaSerializer(grasta_2)
        return serializer.data

    def get_g3(self, obj):
        grasta_3 = obj.grasta_3
        serializer = Character_GrastaSerializer(grasta_3)
        return serializer.data

    def get_g4(self, obj):
        grasta_4 = obj.grasta_4
        serializer = Character_GrastaSerializer(grasta_4)
        return serializer.data

    def get_sk1(self, obj):
        skill_1 = obj.skill_1
        serializer = Character_SkillSerializer(skill_1)
        return serializer.data

    def get_sk2(self, obj):
        skill_2 = obj.skill_2
        serializer = Character_SkillSerializer(skill_2)
        return serializer.data

    def get_sk3(self, obj):
        skill_3 = obj.skill_3
        serializer = Character_SkillSerializer(skill_3)
        return serializer.data

#class CharacterSerializer(serializers.ModelSerializer):
#    weapon_info = serializers.SerializerMethodField(read_only=True)
#
#    class Meta:
#        model = Character
#
#    def get_weapon_info(self, obj):
#        wpn = obj.wpn
#        serializer = Characters_WeaponSerializer(wpn, many=True)
#        return serializer.data
#

# Working with many = true
# class CharacterSerializer(serializers.ModelSerializer):
# wpn = Weapons_ListSerializer(read_only=True, many=True)
# etc
