// 'use server'

import { createClient } from '@supabase/supabase-js'

const supabase_key= process.env.NEXT_PUBLIC_PUBLISHABLE_KEY
const supabase_url= process.env.NEXT_PUBLIC_SUPABASE_URL
const supabase = createClient( supabase_url, supabase_key)

async function getBatchRecords() {
    const { data, error } = await supabase
    .from('hatchery')
    .select()


    return data
}

export const batchRecords = await getBatchRecords();
