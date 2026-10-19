import type {MetadataRoute} from 'next';
import {siteUrl} from '@/lib/site';
import {devices} from '@/lib/devices';

export const dynamic = 'force-static';

export default function sitemap():MetadataRoute.Sitemap {
  return ['','/compare','/privacy','/terms','/contact',...devices.map(d=>'/devices/'+d.slug)].map(path=>({url:siteUrl+path+'/',changeFrequency:'monthly' as const,priority:path===''?1:0.6}))
}
