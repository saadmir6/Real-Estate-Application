import pathlib
import uuid
from django.db import models
from django.forms import ValidationError
from phonenumber_field.modelfields import PhoneNumberField
from django.core.validators import  MaxValueValidator


def unique_agent_image_id(instance, filename):
    fpath = pathlib.Path(filename)
    new_filename = str(uuid.uuid1())
    return f"Agent_Images/{new_filename}{fpath.suffix}"

def unique_images_id(instance, filename):
    fpath = pathlib.Path(filename)
    new_filename = str(uuid.uuid1())
    return f"Posted_Images/{new_filename}{fpath.suffix}"

def unique_cover_image_id(instance, filename):
    fpath = pathlib.Path(filename)
    new_filename = str(uuid.uuid1())
    return f"Cover_Images/{new_filename}{fpath.suffix}"

def my_postal_code_validator(value):
    if len(str(value)) < 1 and len(str(value)) > 7:
        raise ValidationError(
            ("wrong postal code number"),
            params={'value': value},)
    


class Agents(models.Model):
    name = models.CharField(max_length=100, default=''  )
    age = models.IntegerField()
    phone_number = PhoneNumberField(default="")
    email = models.EmailField(max_length=50,  )
    image = models.ImageField(upload_to=unique_agent_image_id, )


class Buy(models.Model):
    id = models.AutoField(primary_key=True)
    street_name = models.CharField(max_length=50, default='' )
    house_number = models.CharField(max_length=100, default='')
    postal_code = models.PositiveIntegerField(validators=[my_postal_code_validator], default=0)
    locality = models.TextField(max_length=20, default='')
    method = models.CharField(max_length=10, default='')
    price = models.PositiveBigIntegerField(default=0)
    cover_photo = models.ImageField(upload_to=unique_cover_image_id, default='')
    house_type = models.TextField(max_length=20, default='')
    bedrooms = models.PositiveIntegerField(validators=[MaxValueValidator(50)], default=0)
    baths = models.PositiveIntegerField(validators=[MaxValueValidator(50)], default=0)
    basement_meter_square = models.PositiveBigIntegerField(default=0, blank=True, null=True)
    garage_meter_square = models.PositiveBigIntegerField(default=0, blank=True, null=True)
    total_house_meter_square = models.PositiveBigIntegerField(default=0, blank=True, null=True)
    total_apartment_meter_square = models.PositiveBigIntegerField(default=0, blank=True, null=True)
    year_biult = models.DateField(blank=True, null=True)
    desc = models.TextField(default='')
    contact_phone = PhoneNumberField(default='')
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class BuyImages(models.Model):
    buy = models.ForeignKey(Buy, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to=unique_images_id)  