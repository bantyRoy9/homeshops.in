import { ChangeEvent, useRef } from "react";
import { AxiosConfig } from "./baseUrl";
import moment from "moment";

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      if (serializedState === null) {
        return {}
      }
      return JSON.parse(serializedState)||{};
    } catch (error) {
      console.error('Failed to load state from localStorage:', error);
      return {};
    }
  };
  
  export const saveState = (state:any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (error) {
      console.error('Failed to save state to localStorage:', error);
    }
  };


export const roundDownToEven = (number: number) => {
  return number % 2 === 0 ? number : number - 1;
};


export const setLocalToken = (token: string) => {
  return localStorage.setItem('token', token)
};

export const getLocalToken = () => {
  return localStorage.getItem('token')
};
export const sethassceenStatus = (status: string) => {
  return localStorage.setItem('firsttimelogin', status)
};

//Remove widespace from string
export const removeWideSpace = (string: string) => {
  return string.replace(/\s/g, '');
};
//Trim Strings
export const trimString = (string: string) => {
  return string.trim();
};
//Generate random number
export const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 10);
};
export const uniqueKey = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};
//Generate random ids
export const newgeneratedId = (name?: string) => {
  let id = "ABC".toLowerCase().slice(0, 8) + "_" + generateRandomId() + "_0";
  if (name) {
    id = removeWideSpace(name).toLowerCase().slice(0, 8) + "_" + generateRandomId() + "_0";
  };
  return id;
};
//Get index of any array of list
export const getIndexByValue = (arr: any, value: string | number) => arr?.findIndex((item: any) => item.title === value);
//filter data by array usign key
export const filterKeyIncludeArr = (arr: any[], key: string, value: string | number | boolean) => arr?.filter(el => el[key] === value);
//Find Multi Array based on Key
export function getIndexWiseDetails(JSONData: any[], index: number) {
  let list = null;
  if (JSONData && JSONData[index]) {
    list = JSONData[index];
  }
  return list;
};
export const matchKeyIncludeArr = (arr: any[], key: string, value: string) => {
  let result = arr;
  if (value) {
    result = arr?.filter(el => el[key].includes(value));
  };
  return result;
};
//filter Multi Array based on Array List Include Key
export function filterMultiListIncludeByArrList(JSONData: any, keyName: string, ArrayList: any) {
  let list = [];
  if (JSONData && JSONData.length > 0 && ArrayList && ArrayList.length > 0) {
    list = JSONData.filter((obj: any) => ArrayList.some((element: any) => obj[keyName] == element));
  } else {
    list = JSONData;
  };
  return list;
};
// export const getElementByIndex = (arr: any[], indx: number, keyName?: any) => {
//   let result = "";
//   if (arr && arr.length && arr[indx]) result = arr[indx];
//   if (keyName) result = result[keyName as keyof object];
//   return result;
// };
export const getElementByIndex = <T = string>(arr: any[],indx: number,keyName?: keyof any): T => {
  if (!Array.isArray(arr) || arr.length <= indx || indx < 0) return "" as T;
  const element = arr[indx];
  if (!keyName) return element as T;
  if (typeof element === "object" && element !== null) {
    return element[keyName] as T;
  }
  return "" as T;
};


export const generateRandomData = (numRows: number, keys: any[]) => {
  let randomData = [] as any;
  const getRandomValue = (prefix: string) => `${prefix}${Math.floor(Math.random() * 1000)}`;

  for (let i = 1; i <= numRows; i++) {
    let rowData = { index: i } as any
    keys.forEach(el => {
      rowData[el] = getRandomValue(el);
    })
    randomData.push(rowData);
  }

  return randomData;
};


//debounce

export const useDebounce = (func: (...args: any[]) => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunc = (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFunc;
};

export function CSVFileReader(e: ChangeEvent<HTMLInputElement>) {
  const file = (e.target.files as FileList)[0]

  const reader = new FileReader();
  reader.onload = (e) => {
    const response = e.target?.result;
  }
  reader.onerror = (e) => {
    console.error(e)
  }
};

export const getColsRowsCombination = (groupSize: number) => {
  const columns = Math.ceil(Math.sqrt(groupSize));
  const rows = Math.ceil(groupSize / columns);
  return { columns, rows }
};

export const isTruthy = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  } else if (Array.isArray(value)) {
    return value.length > 0;
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value).length > 0;
  } else if (typeof value === 'number') {
    return !isNaN(value);
  } else {
    return !!value;
  }
};


export const getNameFromString = <T extends string | string[]>(input: T, delimiter: string | RegExp, index: number = -1): string => {
  const parts = typeof input === 'string' ? input.split(delimiter) : input;
  const resolvedIndex = index < 0 ? parts.length + index : index;
  return parts[resolvedIndex] || '';
}
//Download File
export const downloadFile = async (url: string,fileName: string): Promise<boolean> => {
  try {
    const response = await AxiosConfig.get(url, {responseType: "blob"});
    if(response.status !== 200) return false
    const blob = new Blob([response.data], { type: response.headers["content-type"] });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true
  } catch (error) {
    console.error("Error downloading file:", error);
    return false
  }
};

export function downloadFileFromApi(url:string, filename:string){
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      return true
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return false;
    });
};


export const calculateRatio = (num_1: number, num_2: number): string => {
  for (let num = num_2; num > 1; num--) {
      if ((num_1 % num) === 0 && (num_2 % num) === 0) {
          num_1 = num_1 / num;
          num_2 = num_2 / num;
      }
  }
  const ratio = num_1 + ":" + num_2;
  return ratio;
};

export const camelCaseToWordFormat=(str:string)=>{
  if(!str){
    return ""
  }
  const wordFormatStr = str.replace(/([A-Z])/g, ' $1').toLowerCase();
  return wordFormatStr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').trim();
}

// utils/currencyFormatter.ts
export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
};

export const capitalizedObjKeys = (obj:any) => {
  const capitalizedObj = {} as any;

  for (const key in obj) {
    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      capitalizedObj[capitalizedKey] = capitalizedObjKeys(obj[key]);
    } else {
      capitalizedObj[capitalizedKey] = obj[key];
    }
  }

  return capitalizedObj;
}

export const dateFormater = (date: string, newFormat: string, format?: string) => {
    return moment(new Date(date),format).format(newFormat)
}
export const checkValue = (value:any) =>{
  return value ? value : ""
}


export const toTitleCase = (str:string | null) => {
  if (str){
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  return ""
};

type StateAbbreviation = {
  state: string;
  abbreviation: string;
};

const allStates: StateAbbreviation[] = [
  { state: "Andhra Pradesh", abbreviation: "AP" },
  { state: "Arunachal Pradesh", abbreviation: "AR" },
  { state: "Assam", abbreviation: "AS" },
  { state: "Bihar", abbreviation: "BR" },
  { state: "Chhattisgarh", abbreviation: "CG" },
  { state: "Goa", abbreviation: "GA" },
  { state: "Gujarat", abbreviation: "GJ" },
  { state: "Haryana", abbreviation: "HR" },
  { state: "Himachal Pradesh", abbreviation: "HP" },
  { state: "Jharkhand", abbreviation: "JH" },
  { state: "Karnataka", abbreviation: "KA" },
  { state: "Kerala", abbreviation: "KL" },
  { state: "Madhya Pradesh", abbreviation: "MP" },
  { state: "Maharashtra", abbreviation: "MH" },
  { state: "Manipur", abbreviation: "MN" },
  { state: "Meghalaya", abbreviation: "ML" },
  { state: "Mizoram", abbreviation: "MZ" },
  { state: "Nagaland", abbreviation: "NL" },
  { state: "Odisha", abbreviation: "OD" },
  { state: "Punjab", abbreviation: "PB" },
  { state: "Rajasthan", abbreviation: "RJ" },
  { state: "Sikkim", abbreviation: "SK" },
  { state: "Tamil Nadu", abbreviation: "TN" },
  { state: "Telangana", abbreviation: "TS" },
  { state: "Tripura", abbreviation: "TR" },
  { state: "Uttar Pradesh", abbreviation: "UP" },
  { state: "Uttarakhand", abbreviation: "UK" },
  { state: "West Bengal", abbreviation: "WB" },
  { state: "Andaman and Nicobar Islands", abbreviation: "AN" },
  { state: "Chandigarh", abbreviation: "CH" },
  { state: "Dadra and Nagar Haveli and Daman and Diu", abbreviation: "DN" },
  { state: "Delhi", abbreviation: "DL" },
  { state: "Lakshadweep", abbreviation: "LD" },
  { state: "Puducherry", abbreviation: "PY" }
]

export const  getStateAbbreviations=(statesList: string[]): string =>{
  // Filter the list to return only states from the input list
  const result = allStates
  .filter(each => statesList.includes(each.state))
  .map(each => each.abbreviation)
  .join(", ");

return result || statesList.join(", ");
}

export const StateAbbreviationExcluded = (statesList: string[]):string[]=>{
    const stateExcluded =  allStates.filter(stateObj => !statesList.includes(stateObj.state));
    return stateExcluded.map(each=>each.abbreviation)
}

export const loadImageAsBase64 = async (imageSrc: string): Promise<string> => {
  const img = new Image();
  img.src = imageSrc;

  return new Promise((resolve, reject) => {
      img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = reject;
  });
};

export const robotoMedium = "base64-encoded-string-of-roboto-medium";
interface emptyRow {
  content: string;
  colSpan: number;
  styles: {
      halign: string;
  };
}

export function newformatDate(date: Date): string {
  const day = date.getDate();
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  
  // Format day and minutes with leading zeros if necessary
  const formattedDay = (day < 10) ? `0${day}` : `${day}`;
  const formattedMinutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

  return `${formattedDay}-${month}-${year}`;
}

export function formatDate(date: Date) {
  const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to the month (0-based) and ensure two-digit format
  const day = date.getDate().toString().padStart(2, "0"); // Ensure two-digit day format
    return `${year}${month}${day}`;
}

export const deleteObjectKeys=(obj1:{ [key: string]: any },obj2:{ [key: string]: any }): { [key: string]: any } =>{
  const result = { ...obj1 };
  for (const key in obj2) {
    if (key in result) {
      delete result[key];
    }
  }
  return result;
};
export const getfilterObjKeysByArr=(obj: { [key: string]: any }, keysToRetain: string[]): { [key: string]: any }=> {
  const result: { [key: string]: any } = {};
  for (const key of keysToRetain) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

export const fetchCompleteAddressStr = (addressobj:any) =>Object.values(addressobj).filter(Boolean).join(', ');
export const formateCamalCaseTospace = (str:string) => str.replace(/([A-Z])/g, ' $1').trim();

type SelectOptionType = { label: string; value: any; [key: string]: any };

type GroupedOptionType = { label: string; options: SelectOptionType[] };

export function formatReactSelectOptions<T extends boolean>(arr: any[] | null | undefined,keys: { labelKey: string; valueKey: string; otherKeys?: string[] },isSelectOption: T,groupKey?: string): T extends true ? SelectOptionType : GroupedOptionType[] {
  try {
    if (!Array.isArray(arr) || !keys || !keys.labelKey || !keys.valueKey) {
      return [] as any;
    }
    if (groupKey && arr.length) {
      const groupedOptions = arr.reduce<Record<string, SelectOptionType[]>>((acc, el) => {
        let groupValue = el[groupKey];
        // if (!isTruthy(groupValue) && groupKey !== "isCompatible") return acc;
        const option: SelectOptionType = {
          label: el[keys.labelKey] ?? '',
          value: el[keys.valueKey] ?? '',
        };

        if (keys.otherKeys && keys.otherKeys.length) {
          keys.otherKeys.forEach((key) => {
            if (el[key] !== undefined) {
              option[key] = el[key];
            }
          });
        }

        if (!acc[groupValue]) {
          acc[groupValue] = [];
        }
        acc[groupValue].push(option);
        return acc;
      }, {});
      
      const groupedResult = Object.entries(groupedOptions).map(([key, options]) => ({
        label: groupKey === "isCompatible" ? key == "true" ? "Compatible Inverters" : "Non Compatible Inverters" : key,
        options,
      }));
      return groupedResult as any;
    }

    const options = arr.map((el) => {
      const option: SelectOptionType = {
        label: el[keys.labelKey] ?? '',
        value: el[keys.valueKey] ?? '',
      };

      if (keys.otherKeys && keys.otherKeys.length) {
        keys.otherKeys.forEach((key) => {
          if (el[key] !== undefined) {
            option[key] = el[key];
          }
        });
      }

      return option;
    });

    return isSelectOption ? (options.length > 0 ? options[0] as any : {} as any) : options as any;
  } catch (err) {
    console.error(err);
    return [] as any;
  }
}


export const isValidName = (input: string): boolean => {
  return /^[a-zA-Z]+$/.test(input);
};

export const testPassword = (input:string) => /^[^\s]+$/.test(input);

export const base64ToImage = (base64String: string, contentType: string = 'image/jpeg') => {
  const byteCharacters = atob(base64String);  // Decode Base64 string
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
};



export const handleBase64ToImage = (base64String: string) => {
  const imageBlob = base64ToImage(base64String);
  // const imageUrl = URL.createObjectURL(imageBlob);

  return imageBlob
};


export const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
          const base64String = (reader.result as string).split(',')[1];
          resolve(base64String);  // Resolve with the base64 string
      };
      reader.onerror = (error) => {
          reject(error);  // Reject if there's an error reading the file
      };
      reader.readAsDataURL(file);
  });
};


export const downloadFileAnchor = (filestring: string) => {
  // Create a blob for the file
  const blob = new Blob([filestring], { type: "application/json" });

  // Create a link element for download
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "heatmap.geojson"; // Set the file name

  // Trigger the download
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export function normalizeDuration0_1(duration: number, maxShadowHours = 8) {
  const maxDuration = maxShadowHours * 60 * 60 * 1000; // 8 hours in milliseconds
  return duration / maxDuration;
};


export function mouseMoveCoordinates(event: MouseEvent): { x: number, y: number }{
  var clientX = event.clientX;
  var clientY = event.clientY;
  return {x: clientX, y: clientY}
};

export function getRandomHexColor() {
  var randomColor = Math.floor(Math.random() * 16777215);
  var hexColor = randomColor.toString(16);
  while (hexColor.length < 6) {
      hexColor = "0" + hexColor;
  }
  hexColor = "#" + hexColor;
  return hexColor;
}

export function getRandomColorArray() {
  var red = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red component
  var green = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green component
  var blue = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue component

  return [red, green, blue, 0.7];
}



export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
      return str;
  }
  return str.slice(0, maxLength) + "...";
}


export function areArraysEqual(arr1: number[], arr2: number[]) {
  // Check if both arrays are the same length
  if (arr1.length !== arr2.length) {
      return false;
  }

  // Check each element for equality
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }

  return true;
}


export const contactingStringWithPipeSymbol = (items:string[])=>{
   return items.filter(value => value && value.trim() !== "").join(" | ") // Join non-empty values with " | "
}

export function flattenOneLevelWithLabelAndValue(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};

  for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          // If the nested object has "label" and "value", handle it specifically
          if ('label' in value && 'value' in value) {
              result[key] = { label: value.label, value: value.value };
          } else {
              // Otherwise, flatten the object normally
              for (const [nestedKey, nestedValue] of Object.entries(value)) {
                  result[nestedKey] = nestedValue;
              }
          }
      } else {
          // Add non-object properties directly
          result[key] = value;
      }
  }

  return result;
}

// export const findMissingKeyIndices = (arr: Array<Record<string, any>>, key: string): number[] => arr.map((item, index) => (key in item ? -1 : index)).filter(index => index !== -1);
export const findMissingKeyIndices = (arr: Array<Record<string, any>>, keys: string[]): number[] => arr.map((item, index) => keys.every(key => key in item) ? -1 : index).filter(index => index !== -1);

// getting number of words
export const  getNumberOfWords = (sentance:string,limit:number) =>{ 
  const words = sentance.split(" ")
   return words.length>limit
}

export const handleScreenLoader = (isActive: boolean) => {
  const loader = document.getElementById("loading");
  if (loader) {
    loader.className = `loading ${isActive ? "active" : ""}`;
  }
};


export const extractDigits = (uuid: string,start:number,end:number): string => uuid ? uuid.slice(start, end) : '';


  export  const formatMoney = (amount: number | string,type?:string): string => {
        if (isNaN(Number(amount))) return "0";
      
        const formattedNumber = new Intl.NumberFormat("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          currencyDisplay:'code',
          useGrouping: true,
        }).format(Number(amount));

        if(type){
          return `${formattedNumber}`;
        }
        return `INR ${formattedNumber}`;
      };      

 export const getModuleCapcity = ({stc,v_mp_ref,technology,n_s}:{stc:number,v_mp_ref:number,technology:string,n_s:number})=>{
  const name=`${stc} Wp | ${v_mp_ref} V | ${technology} | ${n_s} cell`
  return name
 }  
 
 export const getInverterCapacity = ({vdco,vac,cec_hybrid}:{vdco:string,vac:string,cec_hybrid:string})=>{
  const capacity = vdco + " Wp" + " | " + vac + " V" + " | " + cec_hybrid
  return capacity
 }


 export function transformObject<T extends Record<string, any>, K extends keyof T>(obj: T,keys: K[]): { [P in keyof T]: P extends K ? string[] : T[P] } {
  return Object.keys(obj).reduce((acc, key) => {
      if (keys.includes(key as K) && typeof obj[key] === 'string') {
          acc[key as K] = (obj[key] as string).split('||').map(item => item.trim()) as any;
      } else {
          acc[key as keyof T] = obj[key];
      }
      return acc;
  }, {} as { [P in keyof T]: P extends K ? string[] : T[P] });
}

export function transformObjects<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[],
  index: number
): { [P in keyof T]: P extends K ? string | undefined : T[P] } {
  return Object.keys(obj).reduce((acc, key) => {
      if (keys.includes(key as K) && typeof obj[key] === 'string') {
          const splitArray = (obj[key] as string).split('||').map(item => item.trim());
          (acc as any)[key] = splitArray[index] ?? undefined; // Ensure proper type assignment
      } else {
          (acc as any)[key] = obj[key];
      }
      return acc;
  }, {} as { [P in keyof T]: P extends K ? string | undefined : T[P] });
}

/** this function for decimal value without rounding */
export const toFixed = <T = string | number>(input: number | string, digitsAfterDot: number = 2): T => {
  const num = typeof input === "number" ? input : parseFloat(input);
  
  if (isNaN(num)) return input as T; // Return original value if not a valid number

  const fixedStr = num.toFixed(digitsAfterDot); // Ensures correct decimal places
  const [intPart, decimalPart] = fixedStr.split('.');

  // Remove decimal part if it's all zeros (e.g., "123.00" → "123")
  return decimalPart && parseInt(decimalPart) === 0 ? Number(intPart) as T : Number(fixedStr) as T;
};

// export function splitBy(value: string,splitBy: string,index?: number,isBoolean?: true): boolean;
// export function splitBy(value: string,splitBy: string,index?: number,isBoolean?: false): string | string[];
export function splitBy(value: string,splitBy: string,index?: number,isBoolean?: boolean): string | string[] | boolean {
  if (!value) return index !== undefined ? "" : [];

  if (!splitBy) return value; // If splitBy is empty, return original value

  const splitArray = value.split(splitBy);

  if (isBoolean) {
    return splitArray.some((item) => {
      const trimmedItem = item.trim().toLowerCase();
      return trimmedItem !== "" && trimmedItem !== "false"; // Ensure "false" is treated as false
    });
  }

  return index !== undefined ? splitArray[index] ?? "" : splitArray;
}


export const formatStringNumber = (input: string,maxLength?:number): string => {
  const match = input.match(/(.*)_(\d+\.\d+)/);
  if (!match) return input; // Return input if the format is incorrect

  const prefix = match[1]; // Extract text before "_"
  const number = parseFloat(match[2]).toFixed(2); // Convert number to 2 decimal places
  let result = `${prefix}_${number}`
  if (maxLength){
    if (result.length <= maxLength) {
      return result;
  }
  return result.slice(0, maxLength) + "...";
  }

  return result
};

export const scrollToTop = (className:string) => {
    setTimeout(() => {
      const element = document.getElementsByClassName(className);
      if (element.length > 0) {
        element[0].scrollIntoView({ behavior: 'smooth', block: 'start',inline:'center' });
      }
    }, 500);
  };
export const convertCssUnit = (value: number, fromUnit: string, toUnit: string, context: number = 16): number => {
    const unitMap: Record<string, number> = {
        'px': 1,
        'rem': context,
        'em': context,
        'vw': window.innerWidth / 100,
        'vh': window.innerHeight / 100,
        'percent': 1, // Relative, requires additional logic
    };

    if (!(fromUnit in unitMap) || !(toUnit in unitMap)) {
        throw new Error(`Unsupported unit conversion: ${fromUnit} to ${toUnit}`);
    }

    // Convert input value to pixels first
    let pxValue = value * unitMap[fromUnit];
    
    // Convert pixels to target unit
    return pxValue / unitMap[toUnit];
};

/**90/30  */


export const  HorulyTimeIntervals  = (time:number,interval:30 | 60)=>{
const hourlyList = [] as string[]
 for (let i=1;i<=time*(60/interval);i++){
   let hours = ''
   let min = ''
  if (interval===30){
    hours = i-1<20?`0${Math.round((i-1)/2)}`:`${Math.round((i-1)/2)}`
    min = i%2!==0?`${Math.round((i*interval)%60)}`:`0${Math.round((i*interval)%60)}`
  }
  else if (interval===60){
    hours = i<10?`0${i}`:`${i}`
    min= "00"
  }
  hourlyList.push(`${hours}:${min}`)
 }
 return hourlyList
}



export const capitalizeFirstLetter = (text: string): string => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const capitalizeSentence = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/(^\s*|\.\s*)([a-z])/g, (match) => match.toUpperCase());
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const catchAsync = <T extends (...args: any[]) => Promise<any>>(
  asyncFn: T,
  showLoader: boolean = false
) => {
  return async (...args: Parameters<T>): Promise<ReturnType<T> | null> => {
    if (showLoader) handleScreenLoader(true);
    try {
      return await asyncFn(...args);
    } catch (error: any) {
      return null;
    } finally {
      console.log("catchAsynFinal");
      handleScreenLoader(false);
    }
  };
};

