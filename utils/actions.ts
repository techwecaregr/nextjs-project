import a1 from '@/public/images/products/episkeues-iphone-15-pro.png';
import a2 from '@/public/images/products/episkeues-iphone-15-pro-max.png';
import sss1 from '@/public/images/products/samsung-galaxy-s24-plus.png';
import sss2 from '@/public/images/products/samsung-galaxy-s24-ultra.png';
import apple from '@/public/images/categories/apple.png';
import samsung from '@/public/images/categories/samsung.png';
import huawei from '@/public/images/categories/huawei.png';
import xiaomi from '@/public/images/categories/xiaomi.png';
import samsung_galaxy_s_dark from '@/public/images/tech-we-care-brands-childs/dark/samsung-galaxy-s-dark.png';
import samsung_galaxy_s_light from '@/public/images/tech-we-care-brands-childs/light/samsung-galaxy-s-light.png';
import samsung_galaxy_a_light from '@/public/images/tech-we-care-brands-childs/dark/samsung-galaxy-a-dark.png';
import samsung_galaxy_a_dark from '@/public/images/tech-we-care-brands-childs/dark/samsung-galaxy-a-dark.png';
import samsung_galaxy_j_dark from '@/public/images/tech-we-care-brands-childs/dark/samsung-galaxy-j-dark.png';
import samsung_galaxy_j_light from '@/public/images/tech-we-care-brands-childs/light/samsung-galaxy-j-light.png';
import samsung_galaxy_note_light from '@/public/images/tech-we-care-brands-childs/light/samsung-galaxy-note-light.png';
import samsung_galaxy_note_dark from '@/public/images/tech-we-care-brands-childs/dark/samsung-galaxy-note-dark.png';
import xiaomi_poco_dark from '@/public/images/tech-we-care-brands-childs/dark/xiaomi-poco-dark.png';
import xiaomi_poco_light from '@/public/images/tech-we-care-brands-childs/light/xiaomi-poco-light.png';
import xiaomi_redmi_dark from '@/public/images/tech-we-care-brands-childs/dark/xiaomi-redmi-dark.png';
import xiaomi_redmi_light from '@/public/images/tech-we-care-brands-childs/light/xiaomi-redmi-light.png';
import xiaomi_mi_dark from '@/public/images/tech-we-care-brands-childs/dark/xiaomi-mi-dark.png';
import xiaomi_mi_light from '@/public/images/tech-we-care-brands-childs/light/xiaomi-mi-light.png';
import back_camera_light from '@/public/images/repairs/back-camera-light.png';
import back_camera_dark from '@/public/images/repairs/back-camera.png';
import back_screen_light from '@/public/images/repairs/back-screen-light.png';
import back_screen_dark from '@/public/images/repairs/back-screen.png';
import battery_light from '@/public/images/repairs/battery-light.png';
import battery_dark from '@/public/images/repairs/battery.png';
import charger_slot_light from '@/public/images/repairs/charger-slot-light.png';
import charger_slot_dark from '@/public/images/repairs/charger-slot.png';
import check_light from '@/public/images/repairs/check-light.png';
import check_dark from '@/public/images/repairs/check.png';
import flash_light from '@/public/images/repairs/flash-light.png';
import flash_dark from '@/public/images/repairs/flash.png';
import front_camera_light from '@/public/images/repairs/front-camera-light.png';
import front_camera_dark from '@/public/images/repairs/front-camera.png';
import handsfree_light from '@/public/images/repairs/handsfree-light.png';
import handsfree_dark from '@/public/images/repairs/handsfree.png';
import megaphone_light from '@/public/images/repairs/megaphone-light.png';
import megaphone_dark from '@/public/images/repairs/megaphone.png';
import microphone_light from '@/public/images/repairs/microphone-light.png';
import microphone_dark from '@/public/images/repairs/microphone.png';
import motherboard_light from '@/public/images/repairs/motherboard-light.png';
import motherboard_dark from '@/public/images/repairs/motherboard.png';
import on_off_light from '@/public/images/repairs/on-off-light.png';
import on_off_dark from '@/public/images/repairs/on-off.png';
import screen_light from '@/public/images/repairs/screen-light.png';
import screen_dark from '@/public/images/repairs/screen.png';
import sensor_light from '@/public/images/repairs/sensor-light.png';
import sensor_dark from '@/public/images/repairs/sensor.png';
import silent_light from '@/public/images/repairs/silent-light.png';
import silent_dark from '@/public/images/repairs/silent.png';
import silent2_light from '@/public/images/repairs/silent2-light.png';
import silent2_dark from '@/public/images/repairs/silent2.png';
import vibration_light from '@/public/images/repairs/vibration-light.png';
import vibration_dark from '@/public/images/repairs/vibration.png';
import volume_light from '@/public/images/repairs/volume-light.png';
import volume_dark from '@/public/images/repairs/volume.png';
import wet_light from '@/public/images/repairs/wet-light.png';
import wet_dark from '@/public/images/repairs/wet.png';
import wifi_light from '@/public/images/repairs/wifi-light.png';
import wifi_dark from '@/public/images/repairs/wifi.png';

import db from '@/utils/db';

export type Product = {
    id: string;
    name: string;
    slug: string;
    brand?: string | null;
    img: string;
    description?: string | null;
    releaseYear?: number | null;
    parentCategoryID: string;
    parentCategorySlug: string;
    childCategorySlug?: string | null;
    childCategoryID?: string | null;
    order: number;
};

export type Category = {
    id: string;
    name: string;
    img_light: string;
    img_dark: string;
    slug: string;
    order: number;
};

export type ChildCategory = Category & {parentCategoryID: string}

export type RepairService = {
  id: string;
  name: string;
  img_dark: string;
  img_light: string;
  repairCode: string;
  order: number;
};

export type RepairServiceSingle = {
  id: string;
  repairCode: string;
  price?: string;
  duration?: number;
  productID: string;
};

export type Repair = RepairService & RepairServiceSingle;

const categories:Category[] = [
    {id: '1', order: 0, name: 'Apple', img_light: String(apple.src), img_dark: String(apple.src), slug: 'apple'},
    {id: '2', order: 1, name: 'Samsung', img_light: String(samsung.src), img_dark: String(samsung.src), slug: 'samsung'},
    {id: '3', order: 2, name: 'Xiaomi', img_light: String(xiaomi.src), img_dark: String(xiaomi.src), slug: 'xiaomi'},
    {id: '4', order: 3, name: 'Huawei', img_light: String(huawei.src), img_dark: String(huawei.src), slug: 'huawei'},
];
const childCategories:ChildCategory[] = [
    {id: '1', order: 0, name: 'Samsung Galaxy S Series', img_light: String(samsung_galaxy_s_light.src), img_dark: String(samsung_galaxy_s_dark.src), parentCategoryID: '2', slug: 'samsung-galaxy-s-series'},
    {id: '2', order: 1,  name: 'Samsung Galaxy A Series', img_light: String(samsung_galaxy_a_light.src), img_dark: String(samsung_galaxy_a_dark.src), parentCategoryID: '2', slug: 'samsung-galaxy-a-series'},
    {id: '2', order: 2,  name: 'Samsung Galaxy J Series', img_light: String(samsung_galaxy_j_light.src), img_dark: String(samsung_galaxy_j_dark.src), parentCategoryID: '2', slug: 'samsung-galaxy-j-series'},
    {id: '2', order: 3,  name: 'Samsung Galaxy Note Series', img_light: String(samsung_galaxy_note_light.src), img_dark: String(samsung_galaxy_note_dark.src), parentCategoryID: '2', slug: 'samsung-galaxy-note-series'},
    {id: '2', order: 4,  name: 'Xiaomi Mi', img_light: String(xiaomi_mi_light.src), img_dark: String(xiaomi_mi_dark.src), parentCategoryID: '3', slug: 'xiaomi-mi'},
    {id: '2', order: 5,  name: 'Xiaomi Poco', img_light: String(xiaomi_poco_light.src), img_dark: String(xiaomi_poco_dark.src), parentCategoryID: '3', slug: 'xiaomi-poco'},
    {id: '2', order: 6,  name: 'Xiaomi Redmi', img_light: String(xiaomi_redmi_light.src), img_dark: String(xiaomi_redmi_dark.src), parentCategoryID: '3', slug: 'xiaomi-redmi'},
];

const products:Product[] = [
    {id: '1', order: 0,  name: 'Iphone 15 Pro Max', img: String(a2.src), parentCategoryID: '1', slug: 'iphone-15-pro-max', parentCategorySlug: 'apple'},
    {id: '2', order: 0,  name: 'Iphone 15 Pro', img: String(a1.src), parentCategoryID: '1', slug: 'iphone-15-pro', parentCategorySlug: 'apple'},
    {id: '3', order: 0,  name: 'Samsung Galaxy S24 Ultra', img: String(sss1.src), parentCategoryID: '2', childCategoryID: '1', slug: 'samsung-galaxy-s24-ultra', parentCategorySlug: 'samsung', childCategorySlug: 'samsung-galaxy-s-series'},
    {id: '4', order: 0,  name: 'Samsung Galaxy S24+', img: String(sss2.src), parentCategoryID: '2', childCategoryID: '1', slug: 'samsung-galaxy-s24-plus', parentCategorySlug: 'samsung', childCategorySlug: 'samsung-galaxy-s-series'},
];

const repairService:RepairService[] = [
  {id: '1', order: 1,  name: 'Διάγνωση Βλάβης', img_light: String(check_light.src), img_dark: String(check_dark.src), repairCode: '001'},
  {id: '2', order: 2,  name: 'Αντικατάσταση Οθόνης', img_light: String(screen_light.src), img_dark: String(screen_dark.src), repairCode: '002'},
  {id: '3', order: 3,  name: 'Αντικατάσταση Μπαταριάς', img_light: String(battery_light.src), img_dark: String(battery_dark.src), repairCode: '003'},
  {id: '4', order: 4,  name: 'Αντικατάσταση Πίσω Όψης', img_light: String(back_screen_light.src), img_dark: String(back_screen_dark.src), repairCode: '004'},
  {id: '5', order: 5,  name: 'Επισκευή Βάσης Σύνδεσης', img_light: String(charger_slot_light.src), img_dark: String(charger_slot_dark.src), repairCode: '005'},
  {id: '6', order: 6,  name: 'Επισκευή Υποδοχής Ακουστικών', img_light: String(handsfree_light.src), img_dark: String(handsfree_dark.src), repairCode: '006'},
  {id: '7', order: 7,  name: 'Επισκευή Ακουστικού', img_light: String(silent_light.src), img_dark: String(silent_dark.src), repairCode: '007'},
  {id: '8', order: 8,  name: 'Επισκευή Μικρόφωνου', img_light: String(microphone_light.src), img_dark: String(microphone_dark.src), repairCode: '008'},
  {id: '9', order: 9,  name: 'Επισκευή Μεγάφωνου', img_light: String(megaphone_light.src), img_dark: String(megaphone_dark.src), repairCode: '009'},
  {id: '10', order: 10,  name: 'Επισκευή Αισθητήρα Εγγύτητας', img_light: String(sensor_light.src), img_dark: String(sensor_dark.src), repairCode: '010'},
  {id: '11', order: 11,  name: 'Επισκευή Πλήκτρου on/off', img_light: String(on_off_light.src), img_dark: String(on_off_dark.src), repairCode: '011'},
  {id: '12', order: 12,  name: 'Επισκευή Πλήκτρων Έντασης', img_light: String(volume_light.src), img_dark: String(volume_dark.src), repairCode: '012'},
  {id: '13', order: 13,  name: 'Επισκευή Διακόπτη Σίγασης', img_light: String(silent2_light.src), img_dark: String(silent2_dark.src), repairCode: '013'},
  {id: '14', order: 14,  name: 'Επισκευή Πίσω Κάμερας', img_light: String(back_camera_light.src), img_dark: String(back_camera_dark.src), repairCode: '014'},
  {id: '15', order: 15,  name: 'Επισκευή Μπροστά Κάμερας', img_light: String(front_camera_light.src), img_dark: String(front_camera_dark.src), repairCode: '015'},
  {id: '16', order: 16,  name: 'Επισκευή Μητρικής Πλακέτας', img_light: String(motherboard_light.src), img_dark: String(motherboard_dark.src), repairCode: '016'},
  {id: '17', order: 17,  name: 'Επισκευή Δόνησης', img_light: String(vibration_light.src), img_dark: String(vibration_dark.src), repairCode: '017'},
  {id: '18', order: 18,  name: 'Επισκευή Wi-Fi', img_light: String(wifi_light.src), img_dark: String(wifi_dark.src), repairCode: '018'},
  {id: '19', order: 19,  name: 'Επισκευή Βρεγμένης Συσκευής', img_light: String(wet_light.src), img_dark: String(wet_dark.src), repairCode: '019'},
  {id: '20', order: 20,  name: 'Επισκευή Φλας', img_light: String(flash_light.src), img_dark: String(flash_dark.src), repairCode: '020'},
];

const repairServiceSingle:RepairServiceSingle[] = [
  {id: '1', repairCode: '001', productID: 'a220c1c8-4770-4e52-a491-dbc2e185b044', price: 'Δωρεάν' },
  {id: '2', repairCode: '002', productID: 'a220c1c8-4770-4e52-a491-dbc2e185b044', price: '549,00 €' },
  {id: '3', repairCode: '003', productID: '1', price: '245,00 €' },
  {id: '4', repairCode: '004', productID: '1', price: '69,00 €' },
  {id: '5', repairCode: '005', productID: '1', price: '66,00 €' },
  {id: '6', repairCode: '006', productID: '1', price: '44,00 €' },
  {id: '7', repairCode: '007', productID: '1', price: '77,00 €' },
  {id: '8', repairCode: '008', productID: '1', price: '45,00 €' },
  {id: '9', repairCode: '009', productID: '1', price: '12,00 €' },
  {id: '10', repairCode: '010', productID: '1', price: '69,00 €' },
  {id: '11', repairCode: '011', productID: '1', price: '25,00 €' },
  {id: '12', repairCode: '012', productID: '1', price: '23,00 €' },
  {id: '13', repairCode: '013', productID: '1', price: '44,00 €' },
  {id: '14', repairCode: '014', productID: '1', price: '44,00 €' },
  {id: '15', repairCode: '015', productID: '1', price: '-' },
  {id: '16', repairCode: '016', productID: '1', price: '45,00 €' },
  {id: '17', repairCode: '017', productID: '1', price: '44,00 €' },
  {id: '18', repairCode: '018', productID: '1', price: '-' },
  {id: '19', repairCode: '019', productID: '1', price: '-' },
  {id: '20', repairCode: '020', productID: '1', price: '44,00 €' },
]

export const getProductRepairs = (productID:string) => {
  console.log('productID!!!');
  console.log(productID);
  var res = repairServiceSingle.filter(item=>item.productID == productID)
  return  res.map(obj1 => {
    const match = repairService.find(item => item.repairCode === obj1.repairCode)
    return match ? {...obj1, ...match} : null
  }).filter(obj => obj!=null) || []
};

export const fetchAllProducts = (paretntID:string, childID?: string) => {
    var res = products.filter(item=>item.parentCategoryID == paretntID)
    if(childID)
        res = res.filter(item=>item.childCategoryID == childID)
    return res;
  };

  export const fetchAllParentCategories = () => {
    return categories;
  };

  export const fetchAllChildCategories = (parentSlug?:string) => {
    var res:Category[] = [];
    if(parentSlug){
      var xx = categories.find(item=>item.slug == parentSlug);
      if(xx)
        res = childCategories.filter(item=>item.parentCategoryID == xx?.id);
    }
    return res;
  };

  export const fetchAllParentCategoryChildren = (paretntID:string) => {
    return childCategories.filter(item=>item.parentCategoryID == paretntID)
  };

  export const fetchSingleProduct = (slug:string) => {
    return products.find(item=>item.slug == slug);
  };

  export const fetchSingleProductChildCategory = (slug:string) => {
    console.log('child category slug')
    console.log(slug)
    const id = childCategories.find(item=>item.slug == slug);
    return products.find(item=>item.childCategoryID == id) || {name: '', img: '', parentCategorySlug: '', slug: '', childCategorySlug:''}
  };

  export const fetchCategoryProducts = (slug:string) => {
    console.log('fetchCategoryProducts')
    const {id} = categories.find(item=>item.slug == slug) || {name: '', img: ''}
    return products.filter(item=>item.parentCategoryID == id) || {name: '', img: ''}
  };

  export const fetchChildCategoryProducts = (slug:string) => {
    const {id} = childCategories.find(item=>item.slug == slug) || {name: '', img: ''}
    console.log('slug inner')
    console.log(slug)
    console.log('slug id')
    console.log(id)
    if(id != undefined)
      return products.filter(item=>item.childCategoryID == id) || {name: '', img: ''}
    else return []
  };

  export const fetchSearchProducts = (search:string) => {
    return products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
  };

  
  export const searchParentSlugForSubCategories = (parentSlug:string) => {
    var res = categories.find(item=>item.slug == parentSlug) || null;
    if(res?.id){
      return childCategories.filter(item=>item.parentCategoryID == res?.id)
    }
    return [];
  };

  export const fetchAllProductsAsync = async (paretntID:string, childID?: string) => {
    return db.product.findMany({
      orderBy:{ order: 'asc'},
      where: {parentCategoryID: paretntID,
        ...(childID && {childCategoryID: childID})
      }
    })
  }

  export const fetchAllParentCategoriesAsync = async () => {
    return db.category.findMany({
      orderBy:{ order: 'asc'}
    })
  };

  export const fetchAllChildCategoriesAsync = async(parentSlug?:string) => {
    const category = await db.category.findMany({
      where: {...(parentSlug && {slug: parentSlug})
      }
    })

    if(category.length>0){
      const parentID = category[0].id;
      return db.childCategory.findMany({
        orderBy:{ order: 'asc'},
        where: {...(parentID && {parentCategoryID: parentID})
        }
      })
    }
    else return [];

  };

  export const fetchChildCategoryProductsAsync  = async (slug:string) => {

    const category = await db.category.findMany({
      where: {slug:slug }
    })
    if(category.length>0){
      const parentID = category[0].id;
      console.log('db parentID')
      console.log(parentID)
      return db.childCategory.findMany({
        orderBy:{ order: 'asc'},
        where: {...(parentID && {parentCategoryID: parentID})
        }
      })
    }
    else return [];
  };

  export const fetchCategoryProductsAsync = async (slug:string) => {
    const empty:Product[] = [];
    const category = await db.category.findMany({
      where: {slug:slug }
    })
    console.log('db category')
    console.log(category)
    if(category.length>0){
      const id = category[0].id;
      return db.product.findMany({
        orderBy:{ order: 'desc'},
        where: {parentCategoryID: id }
      })
    }
    else return empty;
  };

  export const searchParentSlugForSubCategoriesAsync = async (parentSlug:string) => {
    // var res = categories.find(item=>item.slug == parentSlug) || null;
    // if(res?.id){
    //   return childCategories.filter(item=>item.parentCategoryID == res?.id)
    // }
    // return [];

    const category = await db.category.findMany({
      where: {slug:parentSlug }
    })
    if(category.length>0){
      const parentID = category[0].id;
      console.log('db parentID')
      console.log(parentID)
      return db.childCategory.findMany({
        orderBy:{ order: 'asc'},
        where: {...(parentID && {parentCategoryID: parentID})
        }
      })
    }
    else return [];
  };

  export const fetchSingleProductAsync = async (slug:string) => {
    const product = await db.product.findUnique({
      where: {
        slug: slug,
      },
    });
    return product;
  };

  export const getProductRepairsAsync = async (productID:string) => {
    console.log('productID!!!');
    console.log(productID);
    var result=[];
    try{
      const repairRecords = await db.repairServiceSingle.findMany({
        where: {productID:productID },
      }  );
      console.log('repairRecords');
      console.log(repairRecords);
      const repairRecordsCodes = repairRecords.map(record=>record.repairCode);
      console.log('repairRecordsCodes');
      console.log(repairRecordsCodes);
      const repairRecordsDetails = await db.repairService.findMany({
        where: {repairCode: {in:repairRecordsCodes} },
      })
      console.log('repairRecordsDetails');
      console.log(repairRecordsDetails);
      result=repairRecords.map(single=> {
        const relatedService = repairRecordsDetails.find(service=>service.repairCode ===single.repairCode);
        return {...single, ...relatedService,}
      });

      return result;
    }
    catch (error) {
      console.log(error);
    }

  };

  export const fetchSearchProductsAsync = async (search:string) => {
    var result= [];
    console.log('result');
    console.log(search);
    try{
      result = await db.product.findMany({
        where: {name:{
          contains: search, mode: 'insensitive'
        } },
      }  );
      return result;
    }
    catch(error){}
    return  [];
  };