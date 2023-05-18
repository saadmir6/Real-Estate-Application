from rest_framework import serializers
from .models import Agents, Buy, BuyImages, Rent, RentImages, SignUp

class AgentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Agents
        fields = "__all__"

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyImages
        fields = "__all__"

class BuySerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        child = serializers.ImageField(allow_empty_file=False, use_url=True),
        write_only = True)
    class Meta:
        model = Buy
        fields = "__all__"

    def create(self, validated_data):
        uploaded_images = validated_data.pop("uploaded_images",)
        buy = Buy.objects.create(**validated_data)

        for image in uploaded_images:
            BuyImages.objects.create(buy=buy, image=image)
        return buy
    

class ImageSerializerRent(serializers.ModelSerializer):
    class Meta:
        model = RentImages
        fields = "__all__"

class RentSerializer(serializers.ModelSerializer):
    images = ImageSerializerRent(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        child = serializers.ImageField(allow_empty_file=False, use_url=True),
        write_only = True)
    class Meta:
        model = Rent
        fields = "__all__"

    def create(self, validated_data):
        uploaded_images = validated_data.pop("uploaded_images",)
        rent = Rent.objects.create(**validated_data)

        for image in uploaded_images:
            RentImages.objects.create(rent=rent, image=image)
        return rent


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignUp
        fields = "__all__"