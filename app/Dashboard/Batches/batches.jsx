
import { createClient } from '@supabase/supabase-js'

const supabase_key= process.env.NEXT_PUBLIC_PUBLISHABLE_KEY
const supabase_url= process.env.NEXT_PUBLIC_SUPABASE_URL
export const supabase = createClient( supabase_url, supabase_key)


export async function getBatchRecords() {
    
    const { data, error } = await supabase
        .from('hatchery')
        .select()
    
    console.log(error)
    return data
}

export const dataBatch = await getBatchRecords()