export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'profileImage',
      type: 'string',
      title: 'Profile Image',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'socialAccounts',
      type: 'array',
      title: 'Social Accounts',
      of: [
        {
          name: 'socialAccount',
          type: 'object',
          title: 'Social Account',
          fields: [
            {
              name: 'socialMedia',
              type: 'string',
              title: 'Social Media',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Link',
            },
            {
              name: 'socialMediaIcon',
              type: 'string',
              title: 'Social Media Icon',
            },
            {
              name: 'username',
              type: 'string',
              title: 'Username',
            },
          ],
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [
        {
          name: 'school',
          type: 'object',
          title: 'School',
          fields: [
            {
              name: 'schoolId',
              type: 'number',
              title: 'School ID',
            },
            {
              name: 'university',
              type: 'string',
              title: 'University',
            },
            {
              name: 'from',
              type: 'date',
              title: 'from',
            },
            {
              name: 'to',
              type: 'string',
              title: 'to',
            },
            {
              name: 'course',
              type: 'string',
              title: 'Course',
            },
            {
              name: 'degree',
              type: 'string',
              title: 'Degree',
            },
            {
              name: 'name',
              type: 'string',
              title: 'name',
            },
            {
              name: 'address',
              type: 'string',
              title: 'Address',
            },
            {
              name: 'result',
              type: 'string',
              title: 'Result',
            },
          ],
        },
      ],
    },
    {
      name: 'experience',
      type: 'array',
      title: 'Work Experience',
      of: [
        {
          name: 'company',
          type: 'object',
          title: 'Company',
          fields: [
            {
              name: 'companyId',
              type: 'number',
              title: 'Company ID',
            },
            {
              name: 'companyLogo',
              type: 'string',
              title: 'Company Logo',
            },
            {
              name: 'designation',
              type: 'string',
              title: 'Designation',
            },
            {
              name: 'name',
              type: 'string',
              title: 'Company Name',
            },
            {
              name: 'from',
              type: 'date',
              title: 'from',
            },
            {
              name: 'to',
              type: 'string',
              title: 'to',
            },
            {
              name: 'projects',
              type: 'array',
              title: 'Project Ids',
              of: [
                {
                  name: 'project',
                  type: 'object',
                  title: 'Project',
                  fields: [
                    {
                      name: 'id',
                      type: 'number',
                      title: 'Project ID',
                    },
                    {
                      name: 'name',
                      type: 'string',
                      title: 'Project Name',
                    },
                    {
                      name: 'description',
                      type: 'string',
                      title: 'Project Description',
                    },
                    {
                      name: 'responsibilities',
                      type: 'array',
                      title: 'Responsibilities',
                      of: [
                        {
                          name: 'responsibility',
                          type: 'string',
                          title: 'Responsibility',
                        },
                      ],
                    },
                    {
                      name: 'technologies',
                      type: 'array',
                      title: 'Technologies',
                      of: [
                        {
                          name: 'technology',
                          type: 'string',
                          title: 'Technology',
                        },
                      ],
                    },
                    {
                      name: 'sourceCode',
                      type: 'string',
                      title: 'Source Code',
                    },
                    {
                      name: 'demo',
                      type: 'string',
                      title: 'Demo',
                    },
                    {
                      name: 'photos',
                      type: 'array',
                      title: 'Photos',
                      of: [
                        {
                          name: 'photo',
                          type: 'string',
                          title: 'Photo',
                        },
                      ],
                    },
                    {
                      name: 'videos',
                      type: 'array',
                      title: 'Videos',
                      of: [
                        {
                          name: 'video',
                          type: 'string',
                          title: 'Video',
                        },
                      ],
                    },
                    {
                      name: 'documentation',
                      type: 'string',
                      title: 'Documentation',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [
        {
          name: 'skill',
          type: 'object',
          title: 'Skill',
          fields: [
            {
              name: 'skillId',
              type: 'number',
              title: 'Skill ID',
            },
            {
              name: 'name',
              type: 'string',
              title: 'Skill Name',
            },
            {
              name: 'type',
              type: 'string',
              title: 'Skill Type',
            },
          ],
        },
      ],
    },
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [
        {
          name: 'project',
          type: 'object',
          title: 'Project',
          fields: [
            {
              name: 'id',
              type: 'number',
              title: 'Project ID',
            },
            {
              name: 'name',
              type: 'string',
              title: 'Project Name',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Project Description',
            },
            {
              name: 'responsibilities',
              type: 'array',
              title: 'Responsibilities',
              of: [
                {
                  name: 'responsibility',
                  type: 'string',
                  title: 'Responsibility',
                },
              ],
            },
            {
              name: 'technologies',
              type: 'array',
              title: 'Technologies',
              of: [
                {
                  name: 'technology',
                  type: 'string',
                  title: 'Technology',
                },
              ],
            },
            {
              name: 'sourceCode',
              type: 'string',
              title: 'Source Code',
            },
            {
              name: 'demo',
              type: 'string',
              title: 'Demo',
            },
            {
              name: 'photos',
              type: 'array',
              title: 'Photos',
              of: [
                {
                  name: 'photo',
                  type: 'string',
                  title: 'Photo',
                },
              ],
            },
            {
              name: 'videos',
              type: 'array',
              title: 'Videos',
              of: [
                {
                  name: 'video',
                  type: 'string',
                  title: 'Video',
                },
              ],
            },
            {
              name: 'documentation',
              type: 'string',
              title: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      title: 'Certifications',
      of: [
        {
          name: 'certification',
          type: 'object',
          title: 'Certification',
          fields: [
            {
              name: 'certificationId',
              type: 'number',
              title: 'Certification ID',
            },
            {
              name: 'name',
              type: 'string',
              title: 'Certification Name',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Certification Description',
            },
            {
              name: 'date',
              type: 'date',
              title: 'Certification Date',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Certification Link',
            },
            {
              name: 'photo',
              type: 'string',
              title: 'Certification Photo',
            },
          ],
        },
      ],
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [
        {
          name: 'technology',
          type: 'object',
          title: 'Technology',
          fields: [
            {
              name: 'technologyId',
              type: 'number',
              title: 'Technology ID',
            },
            {
              name: 'name',
              type: 'string',
              title: 'Technology Name',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Technology Description',
            },
            {
              name: 'level',
              type: 'string',
              title: 'Skill Level',
            },
            {
              name: 'logo',
              type: 'string',
              title: 'Technology Logo',
            },
            {
              name: 'type',
              type: 'string',
              title: 'Technology Type',
            },
            {
              name: 'experience',
              type: 'string',
              title: 'Technology Experience',
            },
          ],
        },
      ],
    },
  ],
}
