import Brandibble from 'brandibble';
import localforage from 'localforage';
import generateUUID from 'utils/generateUUID';
import ENV from './environment';

localforage.config({
  name: 'brandibble-redux-test',
  storeName: 'brandibble-redux-test',
});

export const brandibble = new Brandibble({
  apiKey: ENV.BRANDIBBLE_API_KEY,
  brandId: ENV.BRANDIBBLE_BRAND_ID,
  apiEndpoint: ENV.BRANDIBBLE_API_ENDPOINT,
  storage: localforage,
});

export const stateWithBrandibbleRef = {
  ref: brandibble,
};

export function makeUnpersistedOrder() {
  return new brandibble.Order(
    brandibble.adapter,
    SAMPLE_MENU_LOCATION_ID,
    'pickup',
  );
}

export const validatedEmailStub = {
  attempted_email: 'api@brandibble.co',
};

export const customersValidateStub = {
  attempted_email: 'api@brandibble.co',
  is_brandibble_active: true,
  is_brandibble_customer: true,
  is_levelup_connected: true,
  is_levelup_user: true,
  levelup_connected_email: 'api@brandibble.co',
};

export const validatedCartStub = {
  data: {
    address: {
      city: 'New York',
      latitude: 40.7198007,
      longitude: -74.0005745,
      state_code: 'NY',
      street_address: '30 Howard St',
      zip_code: '10013',
    },
    cart: [
      {
        id: 15521,
        instructions: '',
        made_for: '',
        option_groups: [],
        quantity: 1,
      },
    ],
    credit_card: {
      customer_card_id: 82250,
    },
    customer: {
      customer_id: 115446,
    },
    discount: 0,
    include_utensils: true,
    location_id: 371,
    notes_for_store: '',
    payment_type: 'credit',
    promo_code: '',
    requested_at: 'asap',
    service_type: 'pickup',
    subtotal: 3.24,
    tax: 0.29,
    total: 3.53,
  },
};

export const addressStub = {
  city: 'New York',
  company: 'Brandibble API Co.',
  contact_name: 'Someone Else',
  contact_phone: '212-555-5555',
  customer_address_id: 155927,
  latitude: 40.755912,
  longitude: -73.9079333,
  state_code: 'NY',
  street_address: '175 East 50th Street',
  unit: 'Suite 1201',
  zip_code: 10022,
};

export const orderStub = {
  address: {
    customer_address_id: 158082,
    city: 'New York',
    state_code: 'NY',
    street_address: '150 East 52nd Street',
    unit: '1001',
    zip_code: '10022',
  },
  cart: [
    {
      id: 5688,
      instructions: '',
      made_for: '',
      name: 'Charred Chicken',
      option_gropus: [
        {
          id: 473,
          option_items: [
            {
              id: 9431,
              name: 'Classic Brown Rice',
              price: 0.0,
            },
          ],
        },
      ],
      price: 10.57,
      quantity: 1,
      total_price: 11.63,
    },
  ],
  customer: {
    customer_id: 3,
    email: 'jc.harrington1@gmail.com',
    first_name: 'JC',
    last_name: 'Gmail',
    phone: '2028343641',
  },
  discount: 0.0,
  include_utensils: 1,
  location_id: 20,
  notes_for_store: 'These are notes for the store.',
  payment_type: 'cash',
  requested_at: '2016-11-11T16:30:00Z',
  service_type: 'delivery',
  shipping: 0.0,
  subtotal: 20.34,
  surcharge: 0.0,
  tax: 1.81,
  tip: 0.0,
  total: 22.15,
};

export const validCredentialsStub = {
  email: 'sanctuary-testing-email@example.com',
  password: 'password',
};

export const cardStub = {
  cc_number: 4788250000121443,
  cc_expiration: 1030,
  cc_cvv: 740,
  cc_zip: 10022,
};

export const authResponseStub = {
  allergens: ['Gluten', 'Dairy'],
  customer_id: 88210,
  email: 'api@brandibble.co',
  first_name: 'Brandibble',
  last_name: 'API',
  levelup_connected: true,
  levelup_email: 'levelup@brandibble.co',
  phone: '212-555-5555',
};

export const SAMPLE_MENU_LOCATION_ID = 19;
export const SAMPLE_EMAIL = 'sanctuary-testing-email@example.com';

export const menusStub = {
  id: generateUUID(),
  expires_at: '2016-07-09T03:59:00Z',
  sold_out_items: [0],
  menu: [
    {
      slug: 'marketplates',
      pos_display_color: '',
      name: 'Marketplates',
      items: [],
    },
  ],
};

export const menuMetaStub = {
  menuKey: 'testKey',
};

export const locationsStub = [
  {
    city: 'Rye Brook',
    cross_streets: 'The Rye Ridge Shopping Center',
    dayparts: [
      {
        daypart: 'Lunch',
        ends_at: '2017-01-26T20:00:00Z',
        has_delivery: false,
        has_pickup: true,
        starts_at: '2017-01-26T15:31:00Z',
        weekday: 'Thursday',
      },
      {
        daypart: 'Lunch',
        ends_at: '2017-01-29T20:00:00Z',
        has_delivery: false,
        has_pickup: true,
        starts_at: '2017-01-29T15:31:00Z',
        weekday: 'Sunday',
      },
    ],
    delivery_minimum: 0.0,
    delivery_zone: [
      [41.0032083, -73.6833251],
      [41.0032124, -73.6833037],
      [41.0032245, -73.6833251],
      [41.0032083, -73.6833251],
    ],
    delivery_zone_description: 'None',
    description: '',
    directions_url: '',
    distance: 100,
    fax_number: null,
    has_delivery: false,
    has_pickup: true,
    hours_delivery: [],
    hours_description:
      '<p>Monday to Friday, 7:30am &mdash; 9pm<br />Saturday to Sunday, 8am &mdash; 9pm</p>',
    hours_for_week: [
      {
        close: '9:00 PM',
        location_id: 362,
        olo_close: '10:30 PM',
        olo_open: '7:30 AM',
        open: '7:30 AM',
        weekday: 'Monday',
        weekday_int: 0,
      },
      {
        close: '9:00 PM',
        location_id: 362,
        olo_close: '10:30 PM',
        olo_open: '7:30 AM',
        open: '7:30 AM',
        weekday: 'Tuesday',
        weekday_int: 1,
      },
      {
        close: '9:00 PM',
        location_id: 362,
        olo_close: '10:30 PM',
        olo_open: '7:30 AM',
        open: '7:30 AM',
        weekday: 'Wednesday',
        weekday_int: 2,
      },
      {
        close: '9:00 PM',
        location_id: 362,
        olo_close: '10:30 PM',
        olo_open: '7:30 AM',
        open: '7:30 AM',
        weekday: 'Thursday',
        weekday_int: 3,
      },
      {
        close: '9:00 PM',
        location_id: 362,
        olo_close: '10:30 PM',
        olo_open: '7:30 AM',
        open: '7:30 AM',
        weekday: 'Friday',
        weekday_int: 4,
      },
      {
        close: '9:00 PM',
        location_id: 362,
        olo_close: '10:30 PM',
        olo_open: '8:30 AM',
        open: '8:00 AM',
        weekday: 'Saturday',
        weekday_int: 5,
      },
      {
        close: '9:00 PM',
        location_id: 362,
        olo_close: '10:30 PM',
        olo_open: '8:30 AM',
        open: '8:00 AM',
        weekday: 'Sunday',
        weekday_int: 6,
      },
    ],
    hours_pickup: ['7:30 AM', '9:00 PM'],
    hours_store: ['7:30 AM', '9:00 PM'],
    in_delivery_zone: false,
    is_coming_soon: false,
    is_new: true,
    is_open: true,
    latitude: 41.0032095,
    location_id: 362,
    longitude: -73.6833186,
    menu_pdf_url: '',
    name: 'Rye Ridge',
    permanently_closed: false,
    phone_number: '914-305-8463',
    sales_tax: 7.375,
    slug: 'location-rye-ridge',
    state_code: 'NY',
    street_address: '112 S. Ridge Street',
    temporarily_closed: false,
    timezone: 'US/Eastern',
    zip_code: '10573',
  },
];

export const waitTimesStub = {
  delivery: 45,
  pickup: 10,
};

export const productStub = {
  allergen_classes: '',
  allergens: '',
  category_id: 108,
  delivery_days: null,
  description:
    'Charred chicken marinated w/ lemon, fennel seeds, and mustard seeds.',
  display_options: 0,
  end_date: null,
  height: null,
  id: 3876,
  large_image_url:
    '//s3.amazonaws.com/betterboh/u/img/prod/6/1461592134_ChickenLemon_or_Charred.jpg',
  length: null,
  menu_position: 2,
  name: 'Charred Chicken',
  nutritional_info: {
    calories: 290,
    cholesterol: 167,
    dietary_fiber: 1,
    protein: 32,
    saturated_fat: 3,
    serving_size: 5,
    sodium: 378,
    sugars: 0,
    total_carbs: 2,
    total_fat: 16,
    trans_fat: 0,
  },
  option_groups: [
    {
      description: 'Please choose 1 of these',
      id: 63,
      included_options: 0,
      max_options: 1,
      menu_position: 1,
      min_options: 1,
      name: 'Bed of Grains or Greens (big plate)',
      option_items: [
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description:
            'Long grain brown rice tossed with a touch of thyme olive oil, red onions, lime juice and fresh parsley. ',
          end_date: null,
          group_id: 63,
          height: null,
          id: 7887,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461161223_base-brownrice.jpg',
          length: null,
          menu_position: 1,
          name: 'Classic Brown Rice',
          nutritional_info: {
            calories: 214,
            cholesterol: 0,
            dietary_fiber: 2,
            protein: 4,
            saturated_fat: 1,
            serving_size: 6,
            sodium: 257,
            sugars: 1,
            total_carbs: 34,
            total_fat: 7,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Classic Brown Rice',
          shorthand: '',
          slug: 'classic-brown-rice',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461161211_brown-rice-2.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Hot',
          weight: null,
          width: null,
        },
        {
          allergen_classes: 'allergen-gluten',
          allergens: 'Gluten',
          delivery_days: null,
          description:
            'Quinoa, bulgur wheat, cucumber, kale stems, and parsley. Vegan.',
          end_date: null,
          group_id: 63,
          height: null,
          id: 11577,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465827265_Tabbouleh_Large.jpg',
          length: null,
          menu_position: 2,
          name: 'Quinoa & Bulgur Tabbouleh',
          nutritional_info: {
            calories: 150,
            cholesterol: 0,
            dietary_fiber: 5,
            protein: 5,
            saturated_fat: 0,
            serving_size: 6.5,
            sodium: 200,
            sugars: 1,
            total_carbs: 25,
            total_fat: 5,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Quinoa Bulgur Tabbouleh',
          shorthand: 'Q',
          slug: 'quinoa-and-bulgur-tabbouleh',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465958166_QuinoaTabbouleh400x400_1.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description: '',
          end_date: null,
          group_id: 63,
          height: null,
          id: 7901,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461245030_GreensWithChervilAndMint.jpg',
          length: null,
          menu_position: 3,
          name: ' Local Greens w/ Chervil & Mint',
          nutritional_info: {},
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: ' Local greens',
          shorthand: '',
          slug: '-local-greens-w-chervil-and-mint',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461245040_GreensWithChervilAndMint.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description: '',
          end_date: null,
          group_id: 63,
          height: null,
          id: 9324,
          large_image_url: null,
          length: null,
          menu_position: 4,
          name: 'No Base',
          nutritional_info: {},
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'No Base',
          shorthand: '',
          slug: 'no-base',
          small_image_url: null,
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
      ],
      short_name: 'Grains or Greens (big)',
      slug: 'bed-of-grains-or-greens-big-plate',
    },
    {
      description: 'Big plate sides',
      id: 64,
      included_options: 0,
      max_options: 2,
      menu_position: 2,
      min_options: 1,
      name: 'Sides (big plate)',
      option_items: [
        {
          allergen_classes: 'allergen-gluten allergen-dairy',
          allergens: 'Gluten, Dairy',
          delivery_days: null,
          description:
            'Ithaca Milk, rBGH-free three cheese blend, whole wheat pasta, roasted cauliflower, panko bread crumb. Contains dairy.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 8202,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461188741_SeasonalMac.jpg',
          length: null,
          menu_position: 1,
          name: 'Seasonal Upstate Mac w/ Roasted Cauliflower',
          nutritional_info: {
            calories: 392,
            cholesterol: 63,
            dietary_fiber: 0,
            protein: 14,
            saturated_fat: 14,
            serving_size: 7,
            sodium: 595,
            sugars: 7,
            total_carbs: 21,
            total_fat: 28,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.92',
          sales_tax_override: null,
          short_name: 'Mac',
          shorthand: 'U',
          slug: 'seasonal-upstate-mac-w-roasted-cauliflower',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461188730_SeasonalMac.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Hot',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description:
            'Chunked and then roasted, our sweet potatoes are dressed with a a house-made fresh rosemary & EVOO blend. Vegan. Gluten-free.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 7902,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461161308_Captures-424.jpg',
          length: null,
          menu_position: 2,
          name: 'Roasted Sweet Potatoes',
          nutritional_info: {
            calories: 174,
            cholesterol: 0,
            dietary_fiber: 5,
            protein: 3,
            saturated_fat: 1,
            serving_size: 5.9,
            sodium: 144,
            sugars: 9,
            total_carbs: 29,
            total_fat: 5,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Sweet Potatoes',
          shorthand: 'P',
          slug: 'roasted-sweet-potatoes',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461161296_sweet-potato-2.jpg',
          start_date: null,
          tag_classes: 'tag-vegan',
          tags: 'Vegan',
          temperature: 'Hot',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description:
            'Simply sautéed cauliflower with preserved lemon and thyme. Vegan. Gluten-free.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 11382,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1464989401_Cauliflower800x800.jpg',
          length: null,
          menu_position: 3,
          name: 'Sauteed Cauliflower w/ Preserved Lemon',
          nutritional_info: {
            calories: 90,
            cholesterol: 0,
            dietary_fiber: 1,
            protein: 1,
            saturated_fat: 0,
            serving_size: 3,
            sodium: 180,
            sugars: 1,
            total_carbs: 4,
            total_fat: 8,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Sauteed Cauliflower ',
          shorthand: 'SC',
          slug: 'sauteed-cauliflower-w-preserved-lemon',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1464989401_Cauliflower400x400.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description:
            'Local kale, roasted garlic, tomato, and pepper. Vegan. Gluten-free.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 11566,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465833754_DIG_INN_5-12-16_77434.jpg',
          length: null,
          menu_position: 4,
          name: 'Roasted Kale w/ Tomato & Pepper',
          nutritional_info: {
            calories: 160,
            cholesterol: 0,
            dietary_fiber: 2,
            protein: 2,
            saturated_fat: 0,
            serving_size: 5,
            sodium: 200,
            sugars: 2,
            total_carbs: 10,
            total_fat: 15,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Roasted Kale',
          shorthand: 'RK',
          slug: 'roasted-kale-w-tomato-and-pepper',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465908972_KaleWTomato400x400.jpg',
          start_date: null,
          tag_classes: 'tag-vegan',
          tags: 'Vegan',
          temperature: 'Hot',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description:
            'Charred broccoli, chilled and tossed with roasted garlic and toasted almonds. Vegan. Gluten-free.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 11387,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1464149506_BrocAlmonds_BIG.jpg',
          length: null,
          menu_position: 5,
          name: 'Broccoli w/ Roasted Garlic & Almonds',
          nutritional_info: {},
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Broccoli w/ Roasted Garlic',
          shorthand: 'BR',
          slug: 'broccoli-w-roasted-garlic-and-almonds',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1464149473_BrocAlmonds_SMALL.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: 'allergen-dairy',
          allergens: 'Dairy',
          delivery_days: null,
          description:
            'Baby bok choy, spiced sweet corn, roasted red pepper, radish, and yogurt ranch dressing. Gluten-free. Contains dairy.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 11569,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465833893_BokChoy_Large.jpg',
          length: null,
          menu_position: 6,
          name: 'Baby Bok Choy w/ Yogurt Ranch',
          nutritional_info: {
            calories: 72,
            cholesterol: 0,
            dietary_fiber: 1,
            protein: 1,
            saturated_fat: 0,
            serving_size: 3.3,
            sodium: 151,
            sugars: 5,
            total_carbs: 9,
            total_fat: 6,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Bok Choy',
          shorthand: 'BC',
          slug: 'baby-bok-choy-w-yogurt-ranch',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465909027_BokChoyWRanch400x400.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Hot',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description:
            'Murasaki sweet potato, cucumber, chioggia beet, and hijiki dressing. Vegan. Gluten-free.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 11587,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465908998_DIG_INN_5-12-16_77525_1.jpg',
          length: null,
          menu_position: 8,
          name: 'Summer Vegetable Poke',
          nutritional_info: {
            calories: 115,
            cholesterol: 0,
            dietary_fiber: 2,
            protein: 2,
            saturated_fat: 0,
            serving_size: 5.5,
            sodium: 429,
            sugars: 7,
            total_carbs: 22,
            total_fat: 5,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Poke',
          shorthand: 'VP',
          slug: 'summer-vegetable-poke',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465908998_VegetablePoke400x400.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description:
            'Local cantaloupe, lime, cilantro, and wild purslane. Vegan. Gluten-free.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 11580,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465939339_DIG_INN_5-12-16_77492_1.jpg',
          length: null,
          menu_position: 9,
          name: 'Cantaloupe Fantastic',
          nutritional_info: {
            calories: 73,
            cholesterol: 0,
            dietary_fiber: 0,
            protein: 0,
            saturated_fat: 0,
            serving_size: 6,
            sodium: 64,
            sugars: 12,
            total_carbs: 12,
            total_fat: 2,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Cantaloupe',
          shorthand: 'CF',
          slug: 'cantaloupe-fantastic',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465939321_CantaloupeFantastic400x400.jpg',
          start_date: null,
          tag_classes: 'tag-vegan',
          tags: 'Vegan',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: 'allergen-honey',
          allergens: 'Honey',
          delivery_days: null,
          description:
            'Black kale salad with horseradish pickled beets and crunchy toasted buckwheat groats. Vegan. Gluten-free.',
          end_date: null,
          group_id: 64,
          height: null,
          id: 11052,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461245331_BlackKaleWithBeetsAndGroats.jpg',
          length: null,
          menu_position: 10,
          name: 'Tuscan Kale w/ Beets',
          nutritional_info: {
            calories: 133,
            cholesterol: 0,
            dietary_fiber: 3,
            protein: 3,
            saturated_fat: 0,
            serving_size: 3.5,
            sodium: 798,
            sugars: 3,
            total_carbs: 14,
            total_fat: 7,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Tuscan Kale w/ Beets',
          shorthand: '',
          slug: 'tuscan-kale-w-beets',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461245322_BlackKaleWithBeetsAndGroats.jpg',
          start_date: null,
          tag_classes: 'tag-vegan tag-new',
          tags: 'Vegan, New',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description: '',
          end_date: null,
          group_id: 64,
          height: null,
          id: 7888,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461245657_Avo.jpg',
          length: null,
          menu_position: 11,
          name: 'Avocado',
          nutritional_info: {
            calories: 160,
            cholesterol: 0,
            dietary_fiber: 6,
            protein: 2,
            saturated_fat: 2,
            serving_size: 2.1,
            sodium: 7,
            sugars: 0,
            total_carbs: 8,
            total_fat: 14,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Avocado',
          shorthand: 'Z',
          slug: 'avocado',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465962510_1465313622_Avo_Small.jpg',
          start_date: null,
          tag_classes: 'tag-vegan',
          tags: 'Vegan',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description: 'Avocado w/ extra virgin olive oil, salt and pepper',
          end_date: null,
          group_id: 64,
          height: null,
          id: 11070,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461586124_1461245927_Avo.jpg',
          length: null,
          menu_position: 12,
          name: 'Avocado (EVOO + salt and pepper)',
          nutritional_info: {},
          opt_is_default: 0,
          price: '0.00',
          sales_tax_override: null,
          short_name: 'Avocado (EVOO + salt and peppe',
          shorthand: 'Z',
          slug: 'avocado-evoo-and-salt-and-pepper',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1464140555_DIG_INN_5-13-16_78217_1.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
      ],
      short_name: 'Sides (big)',
      slug: 'sides-big-plate',
    },
    {
      description: 'One sauce is included',
      id: 74,
      included_options: 1,
      max_options: 3,
      menu_position: 3,
      min_options: 0,
      name: 'Add a sauce',
      option_items: [
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description: '',
          end_date: null,
          group_id: 74,
          height: null,
          id: 7908,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461163484_Lemonwedge.jpg',
          length: null,
          menu_position: 3,
          name: 'Lemon Wedge',
          nutritional_info: {},
          opt_is_default: 0,
          price: '0.46',
          sales_tax_override: null,
          short_name: 'Lemon Wedge',
          shorthand: null,
          slug: 'lemon-wedge',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461187796_EXTRASLemonwedge.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
      ],
      short_name: 'Sauce',
      slug: 'add-a-sauce',
    },
    {
      description: 'Comes with an extra charge',
      id: 76,
      included_options: 0,
      max_options: 1,
      menu_position: 4,
      min_options: 0,
      name: 'Add avocado',
      option_items: [
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description: '',
          end_date: null,
          group_id: 76,
          height: null,
          id: 7917,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1461245927_Avo.jpg',
          length: null,
          menu_position: 1,
          name: 'Avocado (plain)',
          nutritional_info: {
            calories: 160,
            cholesterol: 0,
            dietary_fiber: 6,
            protein: 2,
            saturated_fat: 2,
            serving_size: 2.1,
            sodium: 7,
            sugars: 0,
            total_carbs: 8,
            total_fat: 14,
            trans_fat: 0,
          },
          opt_is_default: 0,
          price: '0.92',
          sales_tax_override: null,
          short_name: 'Avocado (plain)',
          shorthand: '',
          slug: 'avocado-plain',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465313622_Avo_Small.jpg',
          start_date: null,
          tag_classes: 'tag-vegan',
          tags: 'Vegan',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
        {
          allergen_classes: '',
          allergens: '',
          delivery_days: null,
          description: 'Avocado with extra virgin olive oil, salt and pepper.',
          end_date: null,
          group_id: 76,
          height: null,
          id: 11067,
          large_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465313550_DIG_INN_5-13-16_78217.jpg',
          length: null,
          menu_position: 2,
          name: 'Avocado (EVOO + salt and pepper)',
          nutritional_info: {},
          opt_is_default: 0,
          price: '0.92',
          sales_tax_override: null,
          short_name: 'Avocado (EVOO + salt and peppe',
          shorthand: '',
          slug: 'avocado-evoo-and-salt-and-pepper',
          small_image_url:
            '//s3.amazonaws.com/betterboh/u/img/prod/6/1465313489_DIG_INN_5-13-16_78217_1.jpg',
          start_date: null,
          tag_classes: '',
          tags: '',
          temperature: 'Cold',
          weight: null,
          width: null,
        },
      ],
      short_name: 'Avocado',
      slug: 'add-avocado',
    },
  ],
  price: '10.33',
  sales_tax_override: null,
  short_name: 'Chicken LRG',
  shorthand: '',
  slug: 'charred-chicken',
  small_image_url:
    '//s3.amazonaws.com/betterboh/u/img/prod/6/1461162165_Charred-chicken-1.jpg',
  start_date: null,
  tag_classes: '',
  tags: '',
  temperature: 'Hot',
  use_options_wizard: 1,
  weight: null,
  width: null,
};

export const customerOrdersStub = [
  {
    address: {
      city: 'New York',
      customer_address_id: 158082,
      formatted_address: '150 E 52nd St, New York, NY 10022, USA',
      in_delivery_zone: true,
      latitude: 40.7571765,
      longitude: -73.9707321,
      state_code: 'NY',
      street_address: '150 East 52nd Street',
      unit: '1001',
      zip_code: '10022',
    },
    credit_card: {
      card_type: 'Visa',
      customer_card_id: 73394,
      last4: '1443',
    },
    items: [
      {
        id: 3876,
        instructions: '',
        made_for: '',
        name: 'Organic Iced Tea',
        option_groups: [],
        price: 2.38,
        quantity: 1,
        total_price: 2.38,
      },
      {
        id: 5688,
        instructions: '',
        made_for: '',
        name: 'Charred Chicken',
        option_groups: [
          {
            id: 473,
            option_items: [
              {
                id: 9431,
                name: 'Classic Brown Rice',
                price: 0.0,
              },
            ],
          },
          {
            id: 474,
            option_items: [
              {
                id: 14491,
                name: 'Kale, Curry & Delicata Squash',
                price: 0.0,
              },
              {
                id: 14491,
                name: 'Kale, Curry & Delicata Squash',
                price: 0.0,
              },
            ],
          },
          {
            id: 76,
            option_items: [
              {
                id: 7917,
                name: 'Avocado',
                price: 1.58,
              },
            ],
          },
        ],
        price: 11.62,
        quantity: 1,
        total_price: 13.2,
      },
    ],
    location_id: 20,
    location_name: 'Midtown East',
    order_type: 'olo',
    order_type_str: 'Online Order',
    orders_id: 613723,
    payment_type: 'credit',
    phone: '202-834-3641',
    requested_date: '01/23/2017',
    requested_time: '1:38 PM',
    service_type: 'delivery',
    service_type_str: 'Delivery',
    submitted_date: '01/23/2017',
    submitted_time: '12:38 PM',
    timezone: 'US/Eastern',
    total: 26.46,
  },
];

export const buildLineItem = () => new brandibble.LineItem(productStub, 1);
