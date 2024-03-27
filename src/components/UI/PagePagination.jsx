import React from 'react'
import { Pagination, Stack, Typography, Select, FormControl, MenuItem, Box } from '@mui/material'

export default function PagePagination({ totalPages = 1, page = 1, onChange = Function.prototype, label = 'Items per Page', itemsPerPage = [10, 25, 50], limit = 10,
    styles = { p: '5px 0', position: 'sticky', bottom: 0, background: '#f5f5f5', borderRadius: '15px' }, stylesPagination={ variant: "outlined", color: "secondary"} }) {

    return (
        <Box
            sx={styles}
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
                            height: '30px',
                            boxShadow: 'none',
                            '.MuiOutlinedInput-notchedOutline': { border: 0 }
                        }}
                        onChange={(e) => onChange(page, e.target.value)}
                    >

                        {itemsPerPage.map(cnt => (
                            <MenuItem key={cnt} value={cnt}>{cnt}</MenuItem>
                        ))}

                    </Select>
                </FormControl>

                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(e, value) => onChange(value, limit)}
                    showFirstButton
                    showLastButton
                    {...stylesPagination}
                />
            </Stack>
        </Box>

    )
}
