# API Playground created with React & Redux

API using Node JS.

Will generate endpoints with specified format :

```
{
	"_id" : ObjectId("5970808d657a695c012fcc59"),
	"name" : "Scheduler",
	"slug" : "scheduler",
	"description" : "Scheduler service",
	"version" : "v1",
	"endpoints" : [
		{
			"fields" : [
				{
					"constraints" : [
						"notblank"
					],
					"default_value" : null,
					"required" : true,
					"description" : "Session ID of current session in this schedule",
					"type" : "text",
					"name" : "session_id"
				},
				{
					"constraints" : [
						"notblank"
					],
					"default_value" : null,
					"required" : true,
					"description" : "Service ID of service related with this session",
					"type" : "text",
					"name" : "service_id"
				},
				{
					"constraints" : [
						"notblank"
					],
					"default_value" : null,
					"required" : true,
					"description" : "Beeper ID of beeper which this schedule has the appointment",
					"type" : "text",
					"name" : "beeper_id"
				},
				{
					"constraints" : [
						"notblank",
						"date"
					],
					"default_value" : null,
					"required" : true,
					"description" : "End date current schedule (Y-m-d date format)",
					"type" : "text",
					"name" : "date_to"
				},
				{
					"constraints" : [
						"notblank",
						"date"
					],
					"default_value" : null,
					"required" : true,
					"description" : "Start date current schedule (Y-m-d date format)",
					"type" : "text",
					"name" : "date_from"
				},
				{
					"constraints" : [
						"notblank",
						"greaterthanorequal",
						"lessthanorequal"
					],
					"default_value" : null,
					"required" : true,
					"description" : "Start time current schedule (in minutes of the day eg. 10AM equals with 600",
					"type" : "text",
					"name" : "start_at"
				},
				{
					"constraints" : [
						"notblank",
						"greaterthanorequal",
						"lessthanorequal"
					],
					"default_value" : null,
					"required" : true,
					"description" : "End time current schedule (in minutes of the day eg. 10AM equals with 600",
					"type" : "text",
					"name" : "end_at"
				}
			],
			"roles" : [ ],
			"scopes" : [ ],
			"method" : [
				"POST"
			],
			"path" : "/schedules",
			"title" : "Schedule Add"
		},
		{
			"fields" : [
				{
					"constraints" : [
						"notblank"
					],
					"default_value" : null,
					"required" : true,
					"description" : "Session ID of current session in this schedule",
					"type" : "text",
					"name" : "session_id"
				},
				{
					"constraints" : [
						"notblank"
					],
					"default_value" : null,
					"required" : true,
					"description" : "Service ID of service related with this session",
					"type" : "text",
					"name" : "service_id"
				}
			],
			"roles" : [ ],
			"scopes" : [ ],
			"method" : [
				"POST"
			],
			"path" : "/schedules/cancel",
			"title" : "Schedule Cancel"
		}
	],
	"updatedAt" : ISODate("2017-07-21T04:08:59.180Z"),
	"createdAt" : ISODate("2017-07-20T10:06:05.679Z"),
	"__v" : 1
}
```

There's 2 (two) ways to achieve this.
1. You can use DB (Mongo) to store generated payload, and app will load the data firs time only whenever you load/reload the page.
2. You can save to file, and playground will read thorough the file for specified format and will load firstime only whenever you load/re-load the page.
