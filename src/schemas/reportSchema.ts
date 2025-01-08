import {z} from 'zod'

export const reportId = z.string().min(1,"Report ID is required")
export const reportSchema = z.object({
    reportId,
    reportType: z.enum(["EMERGENCY","NON_EMERGENCY"]),
    image: z.string().optional(),
    incidentType: z.string().min(1,"Please specify the type of incident"),
    location: z.string().min(1,"Location is required"),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    title: z.string().min(1,"Title is required"),
    description: z.string().min(10, "Description must be at least 10 characters long"),
    status: z.enum(["PENDING","IN_PROGRESS","RESOLVED","DISMISSED"])
})

export const trackReportSchema = z.object({
  reportId
})