from rest_framework import serializers
from .models import Agents, Buy, BuyImages

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
