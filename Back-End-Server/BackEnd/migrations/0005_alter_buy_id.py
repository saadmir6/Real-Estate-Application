# Generated by Django 4.1.7 on 2023-05-14 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0004_rename_basement_sq_ft_buy_basement_meter_square_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buy',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]