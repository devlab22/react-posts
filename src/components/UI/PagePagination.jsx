import React from 'react'
import { Pagination, Stack, Typography, Select, FormControl, MenuItem, Box } from '@mui/material'

export default function PagePagination({ count = 1, page=1, onChange=Function.prototype, label='Items per Page', itemsPerPage=[10, 25, 50], limit=10 }) {

    return (
        <Box
            sx={{
                p: '5px 0',
                position: 'sticky',
                bottom: 0,
                background: '#f5f5f5',
                borderRadius: '15px'
            }}
        >
            <Stack
                alignItems='center'
                justifyContent='center'
                direction='row'
                gap={1}
            >
                <Typography>
                    {label}
                </Typography>

                <FormControl>
                    <Select
                        value={limit}
                        sx={{
                            width: 'auto',
                            height: '40px',
                            boxShadow: 'none',
                            '.MuiOutlinedInput-notchedOutline': { border: 0 }
                        }}
                        onChange={(e) => onChange(page, e.target.value)}
                    >

                        {itemsPerPage.map( cnt => (
                            <MenuItem key={cnt} value={cnt}>{cnt}</MenuItem>
                        ))}

                    </Select>
                </FormControl>

                <Pagination
                    count={count}
                    page={page}
                    variant="outlined"
                    onChange={(e, value) => onChange(value, limit)}
                    color='secondary'
                    showFirstButton 
                    showLastButton
                />
            </Stack>
        </Box>

    )
}
