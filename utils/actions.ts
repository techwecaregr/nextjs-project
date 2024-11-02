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
  order: number | undefined;
};

export type RepairServiceSingle = {
  id: string;
  repairCode: string;
  price?: string | null;
  duration?: string | null;
  productID: string;
};

export type Repair = {
  name?: string | undefined;
  id: string;
  repairCode: string;
  createdAt: Date;
  updatedAt: Date;
  img_light?: string | undefined;
  img_dark?: string | undefined;
  order?: number | undefined;
  price: string | null;
  duration: string | null;
  productID: string;
}

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

  export const fetchChildCategoryProducts = (slug:string) => {
    const empty:Product[] = [];
    const {id} = childCategories.find(item=>item.slug == slug) || {name: '', img: ''}
    if(id != undefined)
      return products.filter(item=>item.childCategoryID == id) || empty
    else return empty;
  };

  export const fetchChildCategoryProductsAsync2 = async (slug:string) => {
    const empty:Product[] = [];
    const category = await db.category.findMany({
      where: {...(slug && {slug: slug})
      }
    })
    const {id} = category.find(item=>item.slug == slug);
    if(id != undefined)
      return db.product.findMany({
        orderBy:{ order: 'asc'},
        where: {...(id && {childCategoryID: id})
        }
      })
    else return empty;
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
    const category = await db.childCategory.findMany({
      where: {slug:parentSlug}
    })
    if(category.length>0){
      const parentID = category[0].id;
      return db.product.findMany({
        orderBy:{ order: 'asc'},
        where: {...(parentID && {childCategoryID: parentID})
        }
      })
    }
    else return [];

  };

  export const fetchChildCategoryProductsAsync  = async (slug:string) => {
    const empty:Product[] = [];
    const childCategory = await db.childCategory.findMany({
      where: {slug:slug }
    })
    if(childCategory.length>0){
      const parentID = childCategory[0].parentCategoryID;
      return db.product.findMany({
        orderBy:{ order: 'desc'},
        where: {parentCategoryID: parentID, childCategoryID: childCategory[0].id }
      })
    }
    else return empty;
  };

  export const fetchCategoryProductsAsync = async (slug:string) => {
    const empty:Product[] = [];
    const category = await db.category.findMany({
      where: {slug:slug }
    })
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
    // let res = categories.find(item=>item.slug == parentSlug) || null;
    // if(res?.id){
    //   return childCategories.filter(item=>item.parentCategoryID == res?.id)
    // }
    // return [];

    const category = await db.category.findMany({
      where: {slug:parentSlug }
    })
    if(category.length>0){
      const parentID = category[0].id;
      return db.childCategory.findMany({
        orderBy:{ order: 'asc'},
        where: {parentCategoryID: parentID}
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
    let result=[];
    try{
      const repairRecords = await db.repairServiceSingle.findMany({
        where: {productID:productID },
      }  );
      const repairRecordsCodes = repairRecords.map(record=>record.repairCode);
      const repairRecordsDetails = await db.repairService.findMany({
        where: {repairCode: {in:repairRecordsCodes} },
      })
      result=repairRecords.map(single=> {
        const relatedService = repairRecordsDetails.find(service=>service.repairCode ===single.repairCode);
        return {...single, ...relatedService,}
      });

      return result;
    }
    catch (error) {
      console.log(error);
    }
    return  [];
  };

  export const fetchSearchProductsAsync = async (search:string) => {
    let result= [];
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